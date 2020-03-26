<template>
  <div id="equipment">
    <PullDown
      :open="equipmentOpen"
      @toggle="equipmentOpen = !equipmentOpen"
      closedTitle="Equipment"
      openTitle="What equipment do you have?"
    >
      <EquipmentForm v-model="equipment" />
    </PullDown>
    <div v-if="supportedParts.length === 0">
      <h3>How can I help?</h3>
      <p>Tell us about your equipment, and we'll find hospitals in need and the parts that you can make!</p>
    </div>
    <div v-if="supportedParts.length != 0">
      <h3>You can help!</h3>
      <p>Here's what you can make to help people in need:</p>
    </div>
    <div v-for="part of supportedParts" :key="part.key">{{part.name}}</div>
  </div>
</template>

<script>
import devices from "../yml/devices.yml";
import parts from "../yml/parts.yml";
import EquipmentForm from "../components/EquipmentForm";
import PullDown from "../components/PullDown";
import { where, map, all } from "ramda";

import { Parser, HtmlRenderer } from "commonmark";
const [parser, renderer] = [new Parser(), new HtmlRenderer()];

const parseDescriptions = list =>
  list.map(item => ({
    ...item,
    description:
      item.description && renderer.render(parser.parse(item.description))
  }));

export default {
  name: "Home",
  computed: {
    parts: () => parseDescriptions(parts),
    devices: () => parseDescriptions(devices),
    supportedParts: vm => {
      if (!vm.equipment) return [];

      const geq = (candidate, spec) =>
        where(
          map(s => v => v >= s, spec),
          candidate
        );

      const evaluators = {
        printer: ({ requiredDimensions, requiresSupportMaterial }) =>
          geq(vm.equipment.printer.dimensions, requiredDimensions) &&
          (!requiresSupportMaterial || vm.equipment.printer.supportingMaterial),
        cutter: ({ requiredDimensions, sheet }) =>
          geq(vm.equipment.cutter.dimensions, requiredDimensions) &&
          (!sheet.material || vm.equipment.cutter.materials[sheet.material]),
        sewing: ({ material }) =>
          !material || vm.equipment.sewing.materials[material]
      };

      return vm.parts.filter(part =>
        all(([k, v]) => evaluators[k](v), Object.entries(part.equipment))
      );
    }
  },
  components: { EquipmentForm, PullDown },
  data: () => ({ equipment: null, equipmentOpen: true })
};
</script>
    
<style>
#equipment {
  display: relative;
}
</style>

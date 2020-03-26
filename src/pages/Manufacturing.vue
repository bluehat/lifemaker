<template>
  <div id="equipment">
    <h3>Equipment</h3>
    <EquipmentForm v-model="equipment" />
    <div v-for="part of supportedParts" :key="part.key">{{part.name}}</div>
  </div>
</template>

<script>
import devices from "../yml/devices.yml";
import parts from "../yml/parts.yml";
import EquipmentForm from "../components/EquipmentForm";
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

      return (
        vm.equipment &&
        vm.parts.filter(part =>
          all(([k, v]) => evaluators[k](v), Object.entries(part.equipment))
        )
      );
    }
  },
  components: { EquipmentForm },
  data: () => ({ equipment: null })
};
</script>
    
<style>
#equipment > div,
#equipment > div > div {
  padding-left: 1em;
}
</style>

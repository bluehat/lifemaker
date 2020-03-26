<template>
  <div id="equipment">
    <PullDown :open="equipmentOpen" @toggle="equipmentOpen = !equipmentOpen">
      <template v-slot:openTitle>
        <h3>What equipment do you have?</h3>
      </template>
      <template v-slot:closedTitle>
        <h3>☰ My Equipment</h3>
        <span v-if="equipment.printer.has">
          Printer
          <span class="checkmark"></span>
        </span>
        <span v-if="equipment.cutter.has">
          Cutter
          <span class="checkmark"></span>
        </span>
        <span v-if="equipment.sewing.has">
          Sewing
          <span class="checkmark"></span>
        </span>
      </template>
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
import {
  where,
  map,
  all,
  values,
  any,
  pipe,
  prop,
  allPass,
  either,
  not,
  curry,
  always,
  path
} from "ramda";

import { Parser, HtmlRenderer } from "commonmark";
const [parser, renderer] = [new Parser(), new HtmlRenderer()];

const parseDescriptions = list =>
  list.map(item => ({
    ...item,
    description:
      item.description && renderer.render(parser.parse(item.description))
  }));

const saveEquipment = equipment =>
  localStorage.setItem("saved-equipment", JSON.stringify(equipment));

const loadStoredEquipment = () => {
  const stored = localStorage.getItem("saved-equipment");
  return stored && JSON.parse(stored);
};

export default {
  name: "Home",
  computed: {
    parts: () => parseDescriptions(parts),
    devices: () => parseDescriptions(devices),
    supportedParts: vm => {
      if (!vm.equipment) return [];

      const geq = curry((spec, candidate) =>
        where(
          map(s => v => v >= s, spec),
          candidate
        )
      );

      const evaluators = {
        printer: ({ requiredDimensions, requiresSupportMaterial }, printer) =>
          allPass([
            prop("has"),
            pipe(prop("dimensions"), geq(requiredDimensions)),
            either(
              always(not(requiresSupportMaterial)),
              prop("supportingMaterial")
            )
          ])(printer),
        cutter: ({ requiredDimensions, sheet }, cutter) =>
          allPass([
            prop("has"),
            pipe(prop("dimensions"), geq(requiredDimensions)),
            either(
              always(not(sheet.material)),
              path(["materials", sheet.material])
            )
          ])(cutter),
        sewing: ({ material }, sewing) =>
          allPass([
            prop("has"),
            either(always(not(material)), path(["materials", material]))
          ])(sewing)
      };

      return vm.parts.filter(part =>
        all(
          ([k, v]) => evaluators[k](v, vm.equipment[k]),
          Object.entries(part.equipment)
        )
      );
    }
  },
  components: { EquipmentForm, PullDown },
  created() {
    if (pipe(values, any(prop("has")))(this.equipment))
      this.equipmentOpen = false;
  },
  data: () => ({ equipment: loadStoredEquipment(), equipmentOpen: true }),
  watch: {
    equipment() {
      saveEquipment(this.equipment);
    }
  }
};
</script>
    
<style>
.checkmark {
  color: #3a3;
}
.checkmark::after {
  content: "✓";
}

#equipment {
  display: relative;
}
</style>

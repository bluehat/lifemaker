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
    <div v-for="part of evaluatedParts" :key="part.key">
      <h4 :style="{'margin-bottom': 0}">
        <router-link :to="{name: 'part', params: {partKey: part.key}}">{{part.name}}</router-link>
      </h4>
      <div>
        <span v-for="[key, supported] of Object.entries(part.requirements)" :key="key">          
          <span v-if="supported"> 
            <span class="checkmark"></span>Your {{formatDevice(key)}} is compatable!
          </span>
          <span v-if="!supported">
            <span class="xmark"></span>
            {{equipment[key].has ? `Your ${formatDevice(key)} is not compatible` : `${formatDevice(key)} needed`}}
          </span>
        </span>
      </div>
      <div v-html="part.description"></div>
    </div>
  </div>
</template>

<script>
import { parseDescriptions } from "../tools/markdown";
import devices from "../yml/devices.yml";
import parts from "../yml/parts.yml";
import EquipmentForm from "../components/EquipmentForm";
import PullDown from "../components/PullDown";

import {
  where,
  map,
  values,
  any,
  pipe,
  prop,
  allPass,
  either,
  not,
  curry,
  always,
  mapObjIndexed,
  filter,
  identity,
  all,
  sortWith,
  descend
} from "ramda";

const saveEquipment = equipment =>
  localStorage.setItem("saved-equipment", JSON.stringify(equipment));

const loadStoredEquipment = () => {
  const stored = localStorage.getItem("saved-equipment");
  return stored && JSON.parse(stored);
};

export default {
  name: "Manufacturing",
  computed: {
    parts: () => parseDescriptions(parts),
    devices: () => parseDescriptions(devices),
    supportedParts: vm => filter(vm.partSupported)(vm.evaluatedParts),
    evaluatedParts: vm => {
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
        cutter: ({ requiredDimensions }, cutter) =>
          allPass([
            prop("has"),
            pipe(prop("dimensions"), geq(requiredDimensions))
            // either(
            //   always(not(sheet.material)),
            //   path(["materials", sheet.material])
            // )
          ])(cutter),
        sewing: (equipment, sewing) =>
          allPass([
            prop("has")
            //either(always(not(material)), path(["materials", material]))
          ])(sewing)
      };

      return pipe(
        map(part => ({
          ...part,
          requirements: mapObjIndexed(
            (n, k, o) => evaluators[k](o[k], vm.equipment[k]),
            part.equipment
          )
        })),
        sortWith([descend(vm.partSupported)])
      )(vm.parts);
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
  },
  methods: {
    partSupported(part) {
      return pipe(prop("requirements"), values, all(identity))(part);
    },
    formatDevice(key) {
      return key === 'cutter' ? 'Cutter' : '3D Printer';
    }
  }
};
</script>
    
<style>
.checkmark {
  color: #004868;
  padding-right: .5em;
}
.checkmark::after {
  content: "✓";
}

.xmark {
  color: #530d2b;
}
.xmark::after {
  content: "×";
}

#equipment {
  display: relative;
}
</style>

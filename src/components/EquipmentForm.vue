<template>
  <div id="equipment-form">
    <InputSection
      name="I have a 3D Printer!"
      :open="local.printer.has"
      @toggle="open => has('printer', open)"
    >
      <div class="two-column">
        <div>
          <label>Long axis (mm)</label>
          <PathedInput
            @pathChange="pathChanged"
            :object="local"
            type="number"
            :path="'printer.dimensions.longAxis'"
            placeholder="Long Axis"
          />
        </div>
        <div>
          <label>Short axis (mm)</label>
          <PathedInput
            @pathChange="pathChanged"
            :object="local"
            type="number"
            :path="'printer.dimensions.shortAxis'"
            placeholder="Short Axis"
          />
        </div>
      </div>
      <div>
        <label>Height (mm)</label>
        <PathedInput
          @pathChange="pathChanged"
          :object="local"
          type="number"
          :path="'printer.dimensions.height'"
          placeholder="Height"
        />
      </div>
      <div>
        <label class="check">
          <PathedInput
            @pathChange="pathChanged"
            :object="local"
            type="checkbox"
            :path="'printer.supportingMaterial'"
            placeholder="Has Supporting Material"
          />Multiple extrusion
        </label>
      </div>
    </InputSection>
    <InputSection
      name="I have a Laser Cutter / Router!"
      :open="local.cutter.has"
      @toggle="open => has('cutter', open)"
    >
      <div class="two-column">
        <div>
          <label>Long axis (inches)</label>
          <PathedInput
            @pathChange="pathChanged"
            :object="local"
            type="number"
            :path="'cutter.dimensions.longAxis'"
            placeholder="Long Axis"
          />
        </div>
        <div>
          <label>Short axis (mm)</label>
          <PathedInput
            @pathChange="pathChanged"
            :object="local"
            type="number"
            :path="'cutter.dimensions.shortAxis'"
            placeholder="Short Axis"
          />
        </div>
      </div>
      <!-- <label class="check">
        <PathedInput
          @pathChange="pathChanged"
          :object="local"
          type="checkbox"
          :path="'cutter.materials.lexan'"
          placeholder="Lexan"
        />Lexan
      </label>
      <label class="check">
        <PathedInput
          @pathChange="pathChanged"
          :object="local"
          type="checkbox"
          :path="'cutter.materials.acrylic'"
          placeholder="Acrylic"
        />Acrylic
      </label>-->
    </InputSection>
    <InputSection name="I can Sew!" :open="local.sewing.has" @toggle="open => has('sewing', open)">
      <!-- <label class="check">
        <PathedInput
          @pathChange="pathChanged"
          :object="local"
          type="checkbox"
          :path="'sewing.materials.cotton'"
          placeholder="Cotton"
        />Cotton
      </label>-->
    </InputSection>
  </div>
</template>

<script>
import InputSection from "./InputSection";
import PathedInput from "./PathedInput";
import { assocPath } from "ramda";

const defaultSetup = () => ({
  printer: {
    has: false,
    dimensions: {
      longAxis: undefined,
      shortAxis: undefined,
      height: undefined
    },
    supportingMaterial: false
  },
  cutter: {
    has: false,
    materials: { lexan: false, acrylic: false },
    dimensions: {
      longAxis: undefined,
      shortAxis: undefined
    }
  },
  sewing: {
    has: false,
    materials: { cotton: false }
  }
});

export default {
  props: ["value"],
  name: "EquipmentForm",
  computed: {
    local: vm => vm.value || defaultSetup()
  },
  components: { InputSection, PathedInput },
  methods: {
    pathChanged({ path, value }) {
      this.$emit("input", assocPath(path, value, this.local));
    },
    has(equipment, doesHave) {
      this.$emit("input", assocPath([equipment, "has"], doesHave, this.local));
    }
  }
};
</script>
    
<style>
label {
  display: block;
  margin-top: 10px;
  font-size: 0.9em;
}

label.check {
  display: flex;
  align-items: center;
}

input {
  font-size: 1em;
  padding: 0.2em;
}
input[type="number"] {
  width: 100%;
  box-sizing: border-box;
  margin-top: 3px;
}
input[type="checkbox"] {
  height: 2em;
  width: 2em;
  margin-left: 0;
}

.two-column {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
}
.two-column > div {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
}

.two-column > div:first-child {
  margin-right: 10px;
}

.two-column > div:last-child {
  margin-left: 10px;
}
</style>

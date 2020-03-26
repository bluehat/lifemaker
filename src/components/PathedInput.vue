<template>
  <input @input="onInput" :value="value" :checked="value" />
</template>

<script>
import { path } from "ramda";

export default {
  props: ["object", "path", "label"],
  name: "PathedInput",
  computed: {
    value: vm => path(vm.splitPath, vm.object),
    splitPath: vm => vm.path.split(".")
  },
  methods: {
    onInput(e) {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;

      this.$emit("pathChange", { path: this.splitPath, value, e });
    }
  }
};
</script>
    
<style>
</style>

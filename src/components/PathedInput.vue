<template>
  <input @input="$emit('pathChange', {path: splitPath, value: $event.target.value})" :value="value" />
</template>

<script>
import { path } from "ramda";

export default {
  props: ["object", "path", "label"],
  name: "PathedInput",
  computed: {
    value: vm => path(vm.splitPath, vm.object),
    splitPath: vm => vm.path.split(".")
  }
};
</script>
    
<style>
#equipment > div,
#equipment > div > div {
  padding-left: 1em;
}
</style>

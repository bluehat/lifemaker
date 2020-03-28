<template>
  <div class="md">
    <div v-html="markdown" />
  </div>
</template>

<script>
import readme from "../../README.md";
import other_resources from "../md/other_resources.md";
import home from "../md/home.md";
import safety from "../md/safety.md";
const pages = { readme, other_resources, home, safety };

import { routerfyMarkdown } from "../tools/markdown";

export default {
  name: "Md",
  props: ["page"],
  computed: {
    markdown: vm => pages[vm.page]
  },
  mounted: function() {
    routerfyMarkdown(this.$el, this.$router);
  }
};
</script>

<style>
.md {
  padding-top: 2em;
}
</style>

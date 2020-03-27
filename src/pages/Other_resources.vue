<template>
  <div class="other_resources">
    <div v-html="markdown" />
  </div>
</template>

<script>
import other_resources from "../md/other_resources.md";
import { routerfyMarkdown } from "../tools/markdown";

export default {
  name: "Other Resources",
  computed: {
    markdown: () => other_resources
  },
  mounted: function() {
    routerfyMarkdown(this.$el, this.$router);
  }
};
</script>

<style>
.home {
  padding-top: 2em;
}
</style>
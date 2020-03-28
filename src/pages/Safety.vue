<template>
  <div class="safety">
    <div v-html="markdown" />
  </div>
</template>

<script>
import other_resources from "../md/safety.md";
import { routerfyMarkdown } from "../tools/markdown";

export default {
  name: "Safety",
  computed: {
    markdown: () => safety
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

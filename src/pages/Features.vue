<template>
  <div class="features">
    <div v-html="markdown" />
  </div>
</template>

<script>
import features from "../../features.md";
import { routerfyMarkdown } from "../tools/markdown";

export default {
  name: "Features",
  computed: {
    markdown: () => features
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

<template>
  <div class="readme">
    <div v-html="markdown" />
  </div>
</template>

<script>
import readme from "../../README.md";
import { routerfyMarkdown } from "../tools/markdown";

export default {
  name: "Readme",
  computed: {
    markdown: () => readme
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

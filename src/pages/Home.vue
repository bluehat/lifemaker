<template>
  <div class="home">
    <div v-html="markdown" />
  </div>
</template>

<script>
import home from "../md/home.md";
import { routerfyMarkdown } from "../tools/markdown";

export default {
  name: "Home",
  computed: {
    markdown: () => home
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

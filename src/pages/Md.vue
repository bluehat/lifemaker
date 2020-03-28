<template>
  <div class="md">
    <div v-html="markdown" />
  </div>
</template>

<script>
import { routerfyMarkdown } from "../tools/markdown";
import { getMarkdownBody } from "../md/pages";

export default {
  name: "Md",
  props: ["page"],
  computed: {
    markdown: vm => getMarkdownBody(vm.page)
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

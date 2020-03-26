<template>
  <div :class="{section: true, [state]: true}">
    <div class="title" @click="state = state === 'open' ? 'closed': 'open'">
      <h4>
        <span class="bracket">{{bracket}}</span>
        {{name}}
      </h4>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["name"],
  name: "InputSection",
  computed: {
    bracket: vm => (vm.state === "open" ? "˅" : ">")
  },
  data: () => ({ state: "open" })
};
</script>
    
<style>
.bracket {
  font-size: 1.25em;
}

.title {
  cursor: pointer;
  padding-top: 0.5em;
}

.title:hover {
  text-decoration: underline;
}

.title h4 {
  margin: 0;
}

.section {
  max-height: 20em;
  transition: max-height 0.15s linear;
}

.section.open {
}

.section.closed {
  max-height: 2em;
  overflow: hidden;
}
</style>

<template>
  <div :class="{section: true, [state]: true}">
    <div class="title" @click="state = state === 'open' ? 'closed': 'open'">
      <h4>
        <span class="bracket">{{bracket}}</span>
        <span class="main">{{name}}</span>
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
    bracket: vm => (vm.state === "open" ? "✓" : "")
  },
  data: () => ({ state: "closed" })
};
</script>
    
<style>
.bracket {
  font-size: 1.25em;
  color: #3a3;
}

.title {
  cursor: pointer;
  padding-top: 0.5em;
}

.title:hover .main {
  text-decoration: underline;
}

.title h4 {
  margin: 0;
  display: flex;
}

.section {
  max-height: 20em;
  transition: max-height 0.15s linear;
  background: white;
  margin-bottom: 1em;
  padding: 0.5em 0.5em 0.5em 0.5em;
  border-radius: 6px;
}

.section.open {
}

.section.closed {
  max-height: 2em;
  overflow: hidden;
}
</style>

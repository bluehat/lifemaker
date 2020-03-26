<template>
  <div :class="{'pull-down': true, open}">
    <h3 v-if="!open" @click="$emit('toggle')">{{closedTitle}}</h3>
    <h3 v-if="open" @click="$emit('toggle')">{{openTitle}}</h3>
    <div class="pd-content">
      <slot></slot>
    </div>
    <h3 class="close" v-if="open" @click="$emit('toggle')">X</h3>
  </div>
</template>

<script>
export default {
  props: ["open", "openTitle", "closedTitle"],
  name: "PullDown"
};
</script>

<style>
.pull-down h3 {
  cursor: pointer;
}

.pull-down h3:hover {
  text-decoration: underline;
}

.pull-down {
  background: #e4e4e4;
  padding: 1em;
  position: relative;
}

.pd-content {
  overflow: hidden;
}

.pull-down:not(.open) .pd-content {
  max-height: 0;
  position: absolute;
}

.pull-down.open {
  padding-bottom: 1.5em;
}

.close {
  position: absolute;
  right: 0.5em;
  bottom: 0;
}
</style>

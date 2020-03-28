<template>
  <div :class="{'pull-down': true, open}" @click="!open ? $emit('toggle') : null">
    <div v-if="!open">
      <slot name="closedTitle"></slot>
    </div>
    <div v-if="open" @click.stop="$emit('toggle')">
      <slot name="openTitle"></slot>
    </div>
    <div class="pd-content">
      <slot></slot>
    </div>
    <h3 class="close" v-if="open" @click.stop="$emit('toggle')">✕</h3>
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

.pull-down:not(.open):hover h3 {
  text-decoration: underline;
}

.pull-down {
  background: #e4e4e4;
  padding: 1em;
  position: relative;
  border-radius: 0 0 5px 5px;
}

.pd-content {
  overflow: hidden;
}

.pull-down:not(.open) {
  cursor: pointer;
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

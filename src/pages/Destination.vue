<template>
  <div class="destination">
    <h4 :style="{'margin-bottom': 0}">
      {{destination.name}}
      <a class="external-link" :href="destination.documentation"></a>
    </h4>
    <div class="summary">
      <a v-if="destination.image" :href="destination.image">
        <img :src="destination.image" />
      </a>
      <div v-if="destination.description" v-html="destination.description" />
    </div>
    <div class="destination-parts">
      <h5>Needs:</h5>
      <ul>
        <li v-for="part of parts" :key="part.key">
          <router-link :to="{name: 'part', params: {partKey: part.key}}">{{part.name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { parseDescriptions } from "../tools/markdown";
import parts from "../yml/parts.yml";
import destinations from "../yml/destinations.yml";
import { pipe, filter, head } from "ramda";

export default {
  props: ["destinationKey"],
  name: "Home",
  computed: {
    destination: vm =>
      pipe(
        filter(x => x.key === vm.destinationKey),
        parseDescriptions,
        head
      )(destinations),
    parts: vm => filter(part => vm.destination.parts.includes(part.key))(parts)
  },
  data: () => ({})
};
</script>
    
<style>
.destination h4 {
  position: relative;
}

.destination h5 {
  margin: 0;
}

.destination .external-link {
  background-image: url("/iconmonstr-share-11.svg");
  background-repeat: no-repeat;
  background-size: contain;
  border-bottom: solid 2px #0f79d000;
  margin-left: 0.5em;
  height: 1.2em;
  width: 1em;
  display: inline-block;
  box-sizing: border-box;
  position: absolute;
}

.destination .external-link:hover {
  border-bottom: solid 2px #0f79d0;
}

.destination .summary {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}

.destination .summary > a,
.destination .summary > div {
  display: flex;
  flex-direction: column;
}

.destination .summary > a img {
  width: 8em;
  padding-right: 0.5em;
}

.destination .summary > div > p:first-child {
  margin-top: 0;
}
</style>

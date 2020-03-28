<template>
  <div class="destinations">
    <div v-for="destination of destinations" :key="destination.key">
      <h4>
        <router-link
          :to="{name: 'destination', params: {destinationKey: destination.key}}"
        >{{destination.name}}</router-link>&nbsp; is accepting:
      </h4>
      <div class="destination-parts">
        <div v-for="partKey of destination.parts" :key="partKey">
          <router-link :to="{name: 'part', params: {partKey}}">{{partName(partKey)}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { parseDescriptions } from "../tools/markdown";
import destinations from "../yml/destinations.yml";
import parts from "../yml/parts.yml";
export default {
  name: "Destinations",
  methods: {
    partName: partKey => {
      console.log(partKey);
      return parts.filter(x => x.key === partKey)[0].name;
    }
  },
  data: () => ({ destinations: parseDescriptions(destinations) })
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

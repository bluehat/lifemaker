<template>
  <div class="device">
    <h4 :style="{'margin-bottom': 0}">
      {{device.name}}
      <a class="external-link" :href="device.documentation"></a>
    </h4>
    <div class="summary">
      <a v-if="device.image" :href="device.image">
        <img :src="device.image" />
      </a>
      <div v-if="device.description" v-html="device.description" />
    </div>
    <div class="device-parts">
      <h5>Parts:</h5>
      <div class="table" v-for="[partKey, qty] of Object.entries(device.parts)" :key="partKey">
        <div class="count">{{qty}}</div>
        <div>
          <router-link :to="{name: 'part', params: {partKey}}">{{partName(partKey)}}</router-link>
        </div>
      </div>
    </div>
    <div class="device-destinations">
      <h5>Needed by:</h5>
      <div v-for="destination of destinations" :key="destination.key">
        <router-link
          :to="{name: 'destination', params: {destinationKey: destination.key}}"
        >{{destination.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { parseDescriptions } from "../tools/markdown";
import devices from "../yml/devices.yml";
import destinations from "../yml/destinations.yml";
import parts from "../yml/parts.yml";
import { pipe, filter, head } from "ramda";

export default {
  props: ["deviceKey"],
  name: "Device",
  computed: {
    device: vm =>
      pipe(
        filter(x => x.key === vm.deviceKey),
        parseDescriptions,
        head
      )(devices),
    destinations: vm =>
      pipe(
        filter(x => x.devices.includes(vm.deviceKey)),
        parseDescriptions
      )(destinations)
  },
  methods: {
    partName: partKey => {
      return parts.filter(x => x.key === partKey)[0].name;
    }
  },
  data: () => ({})
};
</script>
    
<style>
.device h4 {
  position: relative;
}

.device h5 {
  margin: 0;
}

.device .summary {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}

.device .summary > a,
.device .summary > div {
  display: flex;
  flex-direction: column;
}

.device .summary > a img {
  width: 8em;
  padding-right: 0.5em;
}

.device .summary > div > p:first-child {
  margin-top: 0;
}

.device .table {
  display: flex;
  flex-direction: row;
}

.device .table > div {
  display: flex;
  flex-direction: column;
}

.device .count {
  width: 30px;
}
</style>

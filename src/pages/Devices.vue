<template>
  <div class="devices">
    <h3>Available devices</h3>
    <p>
      These devices are being manufactured to help healthcare providers. If you need any of these devices for your hospital or clinic,
      <a>contact us!</a>
    </p>
    <div v-for="device of devices" :key="device.key" class="list">
      <img :src="device.image" />
      <h4>
        <router-link :to="{name: 'device', params: {deviceKey: device.key}}">{{device.name}}</router-link>
      </h4>
    </div>
  </div>
</template>

<script>
import { parseDescriptions } from "../tools/markdown";
import devices from "../yml/devices.yml";
export default {
  name: "Devices",
  data: () => ({ devices: parseDescriptions(devices) })
};
</script>
    
<style>
.devices .list {
  display: flex;
  flex-direction: row;
}

.devices .list > img {
  display: flex;
  flex-direction: column;
  max-width: 100px;
}

.devices .list > h4 {
  display: flex;
  flex-direction: column;
  padding-left: 1em;
  margin-top: 0px;
}
</style>

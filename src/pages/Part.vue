<template>
  <div class="part">
    <div class="safety-warning">
      <span>
        Please review the
        <router-link :to="{name: 'safety'}">safety guidelines</router-link>!
      </span>
    </div>
    <h4 :style="{'margin-bottom': 0}">
      {{part.name}}
      <a class="external-link" :href="part.documentation"></a>
    </h4>
    <div class="summary">
      <a v-if="part.image" :href="part.image">
        <img :src="part.image" />
      </a>
      <div v-if="part.description" v-html="part.description" />
    </div>
    <div class="part-destinations">
      <h5>Needed by:</h5>
      <ul>
        <li v-for="destination of destinations" :key="destination.key">
          <router-link
            :to="{name: 'destination', params: {destinationKey: destination.key}}"
          >{{destination.name}}</router-link>
        </li>
      </ul>
    </div>
    <div class="part-equipment" v-if="part.equipment.cutter || part.equipment.printer">
      <h5>{{part.equipment.cutter ? 'Cutter' : '3d Printer'}} needed:</h5>
      <CutterSpec v-if="part.equipment.cutter" :spec="part.equipment.cutter" />
      <PrinterSpec v-if="part.equipment.printer" :spec="part.equipment.printer" />
    </div>
  </div>
</template>

<script>
import { parseDescriptions } from "../tools/markdown";
import parts from "../yml/parts.yml";
import PrinterSpec from "../components/PrinterSpec";
import CutterSpec from "../components/CutterSpec";
import destinations from "../yml/destinations.yml";
import { pipe, filter, head } from "ramda";

export default {
  props: ["partKey"],
  name: "Home",
  computed: {
    part: vm =>
      pipe(
        filter(x => x.key === vm.partKey),
        parseDescriptions,
        head
      )(parts),
    destinations: vm =>
      filter(dest => dest.parts.includes(vm.partKey))(destinations)
  },
  components: { PrinterSpec, CutterSpec },
  data: () => ({})
};
</script>
    
<style>
.part h4 {
  position: relative;
}

.part h5 {
  margin: 0;
}

.part .external-link {
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

.part .external-link:hover {
  border-bottom: solid 2px #0f79d0;
}

.part .summary {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
}

.part .summary > a,
.part .summary > div {
  display: flex;
  flex-direction: column;
}

.part .summary > a img {
  width: 8em;
  padding-right: 0.5em;
}

.part .summary > div > p:first-child {
  margin-top: 0;
}

.part-equipment h5 {
  margin: 0;
}

.safety-warning {
  text-align: right;
}

.safety-warning span {
  display: inline-block;
  background: rgb(55, 55, 55);
  color: white;
  padding: 0.5em;
  border-radius: 0 0 0.3em 0.3em;
  font-weight: bold;
}
</style>

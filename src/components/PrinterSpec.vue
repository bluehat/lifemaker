<template>
  <div class="spec">
    <div>
      <div>
        <strong>Short Axis:</strong>
        <span>{{spec.requiredDimensions.shortAxis}} mm</span>
      </div>
      <div>
        <strong>Long Axis:</strong>
        <span>{{spec.requiredDimensions.longAxis}} mm</span>
      </div>
      <div>
        <strong>Height:</strong>
        <span>{{spec.requiredDimensions.height}} mm</span>
      </div>
    </div>
    <div>
      <div v-if="spec.filament">
        <strong>Filament:</strong>
        <span>{{spec.filament}}</span>
      </div>
      <div>
        <strong>Support material:</strong>
        <span>{{spec.requiresSupportMaterial ? 'Yes' : 'No'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["spec"],
  name: "PrinterSpec"
};
</script>

<style>
</style>

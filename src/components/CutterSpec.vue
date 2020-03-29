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
    </div>
    <div>
      <div>
        <strong>Material:</strong>
        <span>{{spec.sheet.material}}</span>
      </div>
      <div>
        <strong>Thickness:</strong>
        <span>{{spec.sheet.thickness}} mm</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["spec"],
  name: "CutterSpec"
};
</script>

<style>
</style>

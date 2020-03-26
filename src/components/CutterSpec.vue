<template>
  <div class="spec">
    <div>
      <div>
        <strong>Short Axis:</strong>
        <span>{{spec.requiredDimensions.shortAxis}} inches</span>
      </div>
      <div>
        <strong>Long Axis:</strong>
        <span>{{spec.requiredDimensions.longAxis}} inches</span>
      </div>
    </div>
    <div>
      <div>
        <strong>Material:</strong>
        <span>{{spec.sheet.material}}</span>
      </div>
      <div>
        <strong>Thickness:</strong>
        <span>{{spec.sheet.thickness}} inches</span>
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

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
  }
});
const svgName = computed(() =>
  props.name.includes("/") ? `#${props.name}` : `#/${props.name}`
);
const svgClass = computed(() =>
  props.className ? "svg-icon " + props.className : "svg-icon"
);
</script>

<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="svgName" />
  </svg>
</template>

<style>
.svg-icon {
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  fill: currentColor;
  overflow: hidden;
}
</style>

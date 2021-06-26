<template>
  <p :style="{ backgroundColor: color }"><slot></slot></p>
</template>
<script>
const randomColor = () => `hsl(${Math.floor(Math.random() * 360)},75%,85%)`;
export default {
  name: "DemoKey",
  data: () => ({ color: randomColor() }),
};
</script>
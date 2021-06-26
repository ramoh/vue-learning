<template>
  <button class="custom-button">
    <slot><span>Default Button Text</span> </slot>
  </button>
</template>
<script>
export default {
  name: "CustomButton",
};
</script>

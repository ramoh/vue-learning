<template>
  <div class="color-preview" :style="style">COLOR:{{ color }}</div>
</template>
<script>
export default {
  name: "ColorPreview",
  props: {
    color: String,
  },
  computed: {
    style() {
      return { backgroundColor: this.color };
    },
  },
};
</script>
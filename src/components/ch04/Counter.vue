<template>
  <div>
    <button @click="handleClick">Clicked {{ clicks }}</button>
  </div>
</template>
<script>
export default {
  name: "Counter",
  data: () => ({
    clicks: 0,
  }),
  methods: {
    handleClick() {
      this.clicks++;
      this.$emit("count", this.clicks);
    },
  },
};
</script>
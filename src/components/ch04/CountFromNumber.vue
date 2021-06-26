<template>
  <p>(Sync example:)The number is {{ localNumber }}</p>
</template>
<script>
export default {
  name: "CountFromNumber",
  props: {
    number: {
      type: Number,
      required: true,
    },
  },
  computed: {
    localNumber: {
      get() {
        return this.number;
      },
      set(val) {
        this.$emit("update:number", val);
      },
    },
  },
  mounted() {
    setInterval(() => this.localNumber++, 1000);
  },
};
</script>
<template>
  <input type="text" :value="value" @input="handleInput" />
</template>
<script>
export default {
  name: "UserName",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput(e) {
      const val = e.target.value.toLowerCase();

      if (this.value !== val) {
        e.target.value = val;
      }

      this.$emit("input", val);
    },
  },
};
</script>
<template>
  <p>This is the contact page abnd {{ userId }}</p>
</template>
<script>
export default {
  data: () => ({ userId: undefined }),
  mounted() {
    console.log("contact page is mounted", this.$route.params);
    this.userId = this.$route.params.userId;
  },
};
</script>
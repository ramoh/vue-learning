<template>
  <div>
    <p>User id:{{ userId }}</p>
    <div v-if="user">Name: {{ user.name }}</div>
  </div>
</template>
<script>
import userMixin from "../mixins/user";
export default {
  name: "UserAdmin",
  mixins: [userMixin],
  props: {
    userId: {
      type: Number,
      required: true,
    },
  },
  created() {
    console.log("logged from User Admin");
  },
  mounted() {
    this.getUserInfo(this.userId).then((user) => {
      this.user = user;
    });
  },
  watch: {
    userId(val, oldVal) {
      console.log(`New value: ${val}, Old value ${oldVal}`);
      this.getUserInfo(val).then((user) => {
        this.user = user;
      });
    },
  },
};
</script>

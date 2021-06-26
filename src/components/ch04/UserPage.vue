<template>
  <div id="user">
    <p id="userData" v-if="user"></p>
    <p v-else>Loading.....</p>
  </div>
</template>
<script>
import userMixin from "../mixins/user";
import renderJson from "renderjson";

renderJson.set_icons("+", "-");
renderJson.set_show_to_level("all");
export default {
  mixins: [userMixin],
  data: () => ({
    user: undefined,
  }),

  mounted() {
    console.log("Loading user information with id:", this.$route.params.userId);
    const userId = this.$route.params.userId;
    this.getUserInfo(userId)
      .then((user) => (this.user = user))
      .then(() => {
        document.getElementById("userData").append(renderJson(this.user));
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        // eslint-disable-next-line no-debugger
        debugger;
        console.log("Not Found");
      });
  },
};
</script>
<style scoped>
#user {
  text-align: start;
}
</style>
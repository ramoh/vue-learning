<template>
  <div>
    <div v-if="userInfo">
      <h1>{{ userInfo.name }}</h1>
      <p id="userdata"></p>
    </div>
    <div v-else-if="errorMsg" class="error">
      {{ errorMsg }}
    </div>
    <div v-else>Loading user infor</div>
  </div>
</template>
<script>
import renderJson from "renderjson";
const baseUrl = "https://jsonplaceholder.typicode.com";

renderJson.set_icons("+", "-");
renderJson.set_show_to_level("all");
export default {
  data: () => ({
    userInfo: undefined,
    errorMsg: undefined,
  }),
  props: ["userId"],
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.userInfo = undefined;
      this.errorMsg = undefined;
      fetch(`${baseUrl}/users/${this.userId}`)
        .then((res) => {
          console.log(res);
          if (res.ok) {
            return Promise.resolve(res.json());
          } else {
            return Promise.reject({ msg: "User info not found" });
          }
        })
        .then((data) => {
          this.userInfo = data;
        })
        .then(() => {
          const dom = renderJson(this.userInfo);
          const item = document.getElementById("userdata");
          item.append(dom);
        })
        .catch((err) => {
          this.errorMsg = err.msg;
        });
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.state = "loading";
    this.init();
    next();
  },
};
</script>
<style scoped>
.error {
  font-weight: bold;
  color: red;
}
div {
  padding-left: 4em;
  text-align: left;
}
</style>
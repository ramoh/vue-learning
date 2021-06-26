<template>
  <base-layout>
    <template slot="header">
      <div id="headerContainer">
        <div id="mainLabel">
          <h2>Rajesh's Playgroud</h2>
        </div>

        <div class="ui menu">
          <router-link to="/about" exact class="item">About</router-link>
          <router-link to="/charts" exact class="item">Charts</router-link>
          <router-link to="/settings" exact class="item">Settings</router-link>
          <router-link
            :to="{ name: 'users', params: { userId: 1 } }"
            class="item"
            >User</router-link
          >
        </div>

        <div id="notificationContainer" class="right menu">
          <notification-count class="item" />
        </div>
      </div>
    </template>
    <template slot="default">
      <router-view></router-view>
    </template>

    <template slot="footer">
      <p>@Copyright Rajesh Mohanty</p>
    </template>
  </base-layout>
</template>

<script>
import BaseLayout from "./components/ch05/BaseLayout.vue";
import NotificationCount from "./components/ch06/NotificationCount.vue";
export default {
  components: { BaseLayout, NotificationCount },
  name: "App",
};
</script>
<style  >
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
  margin: 0px;
}
#headerContainer {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
#notificationContainer {
  display: flex;
  justify-content: flex-end;
  flex: 1;
}
#mainLabel {
  flex: 1;
}
</style>

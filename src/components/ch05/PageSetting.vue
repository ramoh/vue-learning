<template>
  <div class="block">
    <div class="sidebar">
      <div class="sidebar-item">
        <router-link to="/settings/profile" tag="li">
          <a>Profile</a>
        </router-link>
      </div>
      <div class="sidebar-item">
        <router-link to="/settings/email" tag="li">
          <a>Email</a>
        </router-link>
      </div>
      <div class="sidebar-item">
        <router-link to="/notifications" tag="li">
          <a>Notification</a>
        </router-link>
      </div>
    </div>
    <div class="content-area"><router-view /></div>
  </div>
</template>
<script>
export default {
  name: "PageSetting",
};
</script>
<style  scoped>
.block {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
}
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 15%;
  background-color: azure;
}
.sidebar-item {
  padding-top: 20px;
  padding-left: 20px;
  font-weight: bold;
}
.content-area {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  background-color: bisque;
  padding-left: 40px;
  overflow: scroll;
}
</style>

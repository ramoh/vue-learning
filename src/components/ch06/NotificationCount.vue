<template>
  <span class="notification">
    <span>Message count </span> <span class="badge">{{ messages.length }}</span>
  </span>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "NotificationCount",
  computed: mapState("echo", {
    messages: "messages",
  }),
};
</script>

<style scopped>
.notification {
  text-decoration: none;
  padding: 15px 26px;
  position: relative;

  border-radius: 2px;
}

.notification:hover {
  background: rgb(204, 131, 131);
}
.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 50%;
  background: red;
  color: white;
}
</style>
<template>
  <div>
    <input id="msg" type="text" value="" /><button
      type="button"
      @click="handleSubmit"
    >
      Send
    </button>
    <p>
      Messages: {{ messages.length }} and double foo value is: {{ doubleVal }}
    </p>
    <div class="messages" v-for="msg in messages" :key="msg">{{ msg }}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "MessageLister",
  data: () => ({ foo: 2 }),
  computed: {
    doubleVal() {
      return this.foo * 2;
    },
    ...mapState("echo", {
      messages: "messages",
    }),
  },
  mounted() {
    this.getMessages();
  },
  methods: {
    handleSubmit() {
      const msg = document.getElementById("msg").value;
      this.sendMessage(msg);
      document.getElementById("msg").value = "";
    },
    ...mapActions("echo", ["sendMessage", "getMessages"]),
  },
};
</script>



import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import router from "./components/ch05/routes";
import store from "./components/ch06/store";
import "semantic-ui-css/semantic.css";

Vue.config.productionTip = false
Vue.use(VueRouter);

Vue.directive("blink", {
    bind(el) {
        let isVisible = true;
        setInterval(() => {
            isVisible = !isVisible;
            el.style.visibility = isVisible ? "visible" : "hidden";
        }, 1000);
    }
});


store.dispatch("echo/getMessages");
/*
let count = 0;
setInterval(() => {
    store.dispatch({
        type: "sendMessage",
        message: `This is messsage number ${count}`,
    });
    count++;
}, 2 * 60000);
*/

new Vue({
    render: h => h(App),
    router: router,
    store: store
}).$mount('#app')



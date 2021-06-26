import Vue from "vue";
import Vuex from "vuex";
import * as echo from "./echo-web";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        echo,
    }
});

console.log("Store configuration has been exported ....");
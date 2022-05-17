import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import vueSabre from "../src/index.js";
Vue.use(vueSabre);

// 全局引入
// import vueSabre from "vue-sabre";
// import "vue-sabre/dist/vue-sabre.css";
// Vue.use(vueSabre);

// 按需引入
// import { Button, Cellgroup, Cellitem } from "vue-sabre";
// Vue.use(Button);
// Vue.use(Cellgroup);
// Vue.use(Cellitem);
// import "vue-sabre/flexible.js";

import "./assets/style/reset.less";

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");

import FastClick from "fastclick";

FastClick.attach(document.body);

import loading from "./loading.vue";
import "./loading.less";
import Vue from "vue";

const LoadingConstructor = Vue.extend(loading);

const instance = new LoadingConstructor({
    el: document.createElement("div")
});

const Loading = (options) => {
    document.body.appendChild(instance.$el);
    instance.visible = true;
}

Loading.hide = () => {
    instance.visible = false;
}

Loading.install = function(Vue) {
    Vue.prototype.$loading = Loading;
};
export default Loading;

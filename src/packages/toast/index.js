import toast from "./toast.vue";
import "./toast.less";
import Vue from "vue";

const ToastConstructor = Vue.extend(toast);

const instance = new ToastConstructor({
    el: document.createElement("div")
});

const DEFAULT = {
    duration: 1200,
    type: "normal"
};

const Toast = (options) => {
    if (typeof (options) === "string") {
        instance.message = options;
        instance.duration = DEFAULT.duration;
        instance.type = DEFAULT.type;
    } else if (typeof (options) === "object") {
        instance.message = options.message || "toast";
        instance.duration = options.duration || DEFAULT.duration;
        instance.type = options.type;
    }
    document.body.appendChild(instance.$el);
    instance.visible = true;

    const timer = setTimeout(() => {
        clearTimeout(timer);
        instance.visible = false;
    }, instance.duration + 100);
};

Toast.install = function(Vue) {
    Vue.prototype.$toast = Toast;
};

export default Toast;

import Switch from "./switch.vue";
import "./switch.less";
Switch.install = function(Vue) {
    Vue.component(Switch.name, Switch);
};
export default Switch;

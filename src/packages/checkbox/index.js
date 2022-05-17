import Checkbox from "./checkbox.vue";
import "./checkbox.less";
Checkbox.install = function(Vue) {
    Vue.component(Checkbox.name, Checkbox);
};
export default Checkbox;

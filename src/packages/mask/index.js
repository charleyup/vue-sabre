import Mask from "./mask.vue";
import "./mask.less";
Mask.install = function(Vue) {
    Vue.component(Mask.name, Mask);
};
export default Mask;

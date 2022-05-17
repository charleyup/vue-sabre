import Picker from "./picker.vue";
import "./picker.less";
Picker.install = function(Vue) {
    Vue.component(Picker.name, Picker);
};
export default Picker;

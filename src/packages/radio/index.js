import Radio from "./radio.vue";
import "./radio.less";
Radio.install = function(Vue) {
    Vue.component(Radio.name, Radio);
};
export default Radio;
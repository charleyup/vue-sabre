import CheckboxGroup from "./checkboxgroup.vue";
import "./checkboxgroup.less";
CheckboxGroup.install = function(Vue) {
    Vue.component(CheckboxGroup.name, CheckboxGroup);
};
export default CheckboxGroup;

import CellGroup from "./cellgroup.vue";
import "./cellgroup.less";
CellGroup.install = function(Vue) {
    Vue.component(CellGroup.name, CellGroup);
};
export default CellGroup;

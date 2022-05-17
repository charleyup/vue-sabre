import CellItem from "./cellitem.vue";
import "./cellitem.less";
CellItem.install = function(Vue) {
    Vue.component(CellItem.name, CellItem);
};
export default CellItem;

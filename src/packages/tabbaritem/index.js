import TabBarItem from "./tabbaritem.vue";
import "./tabbaritem.less";
TabBarItem.install = function(Vue) {
    Vue.component(TabBarItem.name, TabBarItem);
};
export default TabBarItem;

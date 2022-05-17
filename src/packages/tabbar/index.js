import TabBar from "./tabbar.vue";
import "./tabbar.less";
TabBar.install = function(Vue) {
    Vue.component(TabBar.name, TabBar);
};
export default TabBar;

import Tabs from "./tabs.vue";
import "./tabs.less";
Tabs.install = function(Vue) {
    Vue.component(Tabs.name, Tabs);
};
export default Tabs;

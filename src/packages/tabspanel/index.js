import TabsPanel from "./tabs-panel.vue";
import "./tabs-panel.less";
TabsPanel.install = function(Vue) {
    Vue.component(TabsPanel.name, Tabs);
};
export default TabsPanel;

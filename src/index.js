import { packages } from "./config.json";
import "./utils/flexible";
import "./assets/iconfont/iconfont.css";

const install = (Vue) => {
    if (install.installed) return;
    packages.forEach(item => {
        const pkgName = item.name.toLowerCase();
        const pkg = require(`./packages/${pkgName}/index.js`).default;
        if (item.type === "component") {
            Vue.component(pkg.name, pkg);
        } else if (item.type === "method") {
            Vue.prototype[`$${pkgName}`] = pkg;
        } else if (item.type === "directive") {
            Vue.directive(pkgName, pkg);
        } else if (item.type === "filter") {
            Vue.filter(pkgName, pkg);
        }
    });
};

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    install
};

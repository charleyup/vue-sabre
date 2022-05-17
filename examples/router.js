import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    // mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
        },
        {
            path: "/button",
            name: "button",
            component: () => import(/* webpackChunkName: "button" */ "./views/Button.vue")
        },
        {
            path: "/cell",
            name: "cell",
            component: () => import(/* webpackChunkName: "cell" */ "./views/Cell.vue")
        },
        {
            path: "/action-sheet",
            name: "action-sheet",
            component: () => import(/* webpackChunkName: "action-sheet" */ "./views/ActionSheet.vue")
        },
        {
            path: "/toast",
            name: "toast",
            component: () => import(/* webpackChunkName: "toast" */ "./views/Toast.vue")
        },
        {
            path: "/radio",
            name: "radio",
            component: () => import(/* webpackChunkName: "radio" */ "./views/Radio.vue")
        },
        {
            path: "/checkbox",
            name: "checkbox",
            component: () => import(/* webpackChunkName: "checkbox" */ "./views/Checkbox.vue")
        },
        {
            path: "/tabs",
            name: "tabs",
            component: () => import(/* webpackChunkName: "radio" */ "./views/Tabs.vue")
        },
        {
            path: "/tabbar",
            name: "tabbar",
            component: () => import(/* webpackChunkName: "radio" */ "./views/TabBar.vue")
        },
        {
            path: "/switch",
            name: "switch",
            component: () => import(/* webpackChunkName: "switch" */ "./views/Switch.vue")
        },{
            path: "/picker",
            name: "picker",
            component: () => import(/* webpackChunkName: "picker" */ "./views/Picker.vue")
        },
        {
            path: "/modal",
            name: "modal",
            component: () => import(/* webpackChunkName: "modal" */ "./views/Modal.vue")
        }
    ]
});

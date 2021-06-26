import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../../ch04/Home1.vue";
import About from "../../ch04/About.vue";
import Contact from "../../ch04/Contact.vue";
import PageUser from "../../ch05/PageUser.vue";
import PageSetting from "../../ch05/PageSetting.vue";
import PageProfile from "../../ch05/PageSettingProfile.vue";
import PageEmail from "../../ch05/PageSettingEmail.vue";
import PageNotFound from "../../ch05/PageNotFound.vue";
import MessageLister from "../../ch06/MessageLister.vue";
import ChartTest from "../../charts/ChartTest.vue";
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",

    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/charts",
            component: ChartTest
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/contact/:userId",
            component: Contact
        },
        {
            name: "users",
            path: "/users/:userId",
            alias: "/user/:userId",
            component: PageUser,
            props: true
        },
        {
            path: "/settings",
            alias: "/preferences",
            component: PageSetting,
            children: [
                {
                    path: "profile",
                    component: PageProfile,
                },
                {
                    path: "email",
                    component: PageEmail,

                },
                {
                    path: "/notifications",
                    component: MessageLister
                }
            ],
            meta: {
                requiresAuth: true,
                title: "User preferences"
            }
        }, {
            path: "*",
            component: PageNotFound
        }
    ]
});

router.beforeEach((to, from, next) => {
    console.log(`coming from ${from.fullPath}, going to ${to.fullPath}`);

    const authReq = to.matched.some((record) => record.meta.requiresAuth);
    if (authReq) {
        console.log("Authentication is requred before navigating to this link");
    }
    next();
});

router.afterEach((to) => {

    if (to.meta.title)
        document.title = to.meta.title;
});

export default router;

console.log("Router configuration has been exported...")

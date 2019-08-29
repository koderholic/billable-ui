import Vue from "vue";
import Router from "vue-router";

import homeComponent from "@/components/home"


Vue.use(Router)
export const router =  new Router({
    mode: "hash", 
    routes: [ 
        {
            name: "home",
            path: '/',
            component: homeComponent
        }
    ]
})
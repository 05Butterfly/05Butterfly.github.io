import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue"
import Projects from "./components/Projects.vue";
import Error404 from "./components/Error404.vue";

const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/projects", component: Projects },
    { path: "/:pathMatch(.*)*", component: Error404 },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
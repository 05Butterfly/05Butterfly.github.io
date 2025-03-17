import { createRouter, createWebHistory } from "vue-router";

import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import Error404View from '../views/Error404View.vue'

const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomeView },
    { path: "/projects", component: ProjectView },
    { path: "/:pathMatch(.*)*", component: Error404View }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
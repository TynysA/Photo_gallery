import Main from "@/pages/Main.vue"

import {createRouter, createWebHistory} from "vue-router"
import Likes from "@/pages/Likes.vue";
import BigImage from "@/pages/BigImage.vue";

const routes = [
    {
        path: "/",
        component: Main,
    },
    {
        path: "/likes",
        component: Likes,
    },
    {
        path: "/:id",
        component: BigImage,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL),
})

export default router;
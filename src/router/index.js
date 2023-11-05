import { createRouter, createWebHistory } from "vue-router";
import AppHome from "@/views/AppHome";
import AppOurStocks from "@/views/AppOurStocks";
import AppForBrokers from "@/views/AppForBrokers";
import AppContacts from "@/views/AppContacts";
import AppError404 from "@/views/AppError404";

const routes = [
    {
        path: "/",
        name: "home",
        component: AppHome,
    },
    {
        path: "/our-stocks",
        name: "stocks",
        component: AppOurStocks,
    },
    {
        path: "/for-brokers",
        name: "forBrokers",
        component: AppForBrokers,
    },
    {
        path: "/contacts",
        name: "contacts",
        component: AppContacts,
    },
    {
        path: "/404",
        name: "Error404",
        component: AppError404,
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        redirect: "/404",
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

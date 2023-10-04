import { createRouter, createWebHistory } from "vue-router";
import AppHome from "@/views/AppHome";
import AppOurStocks from "@/views/AppOurStocks";
import AppForBrokers from "@/views/AppForBrokers";
import AppContacts from "@/views/AppContacts";

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
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

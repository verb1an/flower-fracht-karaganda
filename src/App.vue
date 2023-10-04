<template>
    <main class="main">
        <div class="wrapper">
            <app-header></app-header>
            <router-view></router-view>

            <app-footer></app-footer>
        </div>
    </main>
</template>

<script setup>
import { provide } from "vue";

const menuItems = [
    {
        text: "Главная",
        to: "/",
    },
    {
        text: "Наши склады",
        to: "/our-stocks",
    },
    {
        text: "Брокерам",
        to: "/for-brokers",
    },
    {
        text: "Контакты",
        to: "/contacts",
    },
];

provide("main-menu", menuItems);
</script>

<style lang="scss">
@use "@/assets/scss/main";
</style>
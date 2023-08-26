<template>
    <nav class="nav">
        <ul class="menu">
            <li v-for="item in menuItems" :key="item.to" class="menu__item">
                <router-link :to="item.to">{{ item.text }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "app-main-menu",
};
</script>

<script setup>
import { ref } from "vue";

const menuItems = ref([
    {
        text: "Главная",
        to: "/",
    },
    {
        text: "Наши склады",
        to: "/",
    },
    {
        text: "Брокерам",
        to: "/",
    },
    {
        text: "Контакты",
        to: "/",
    },
]);
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.nav .menu {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    .menu__item {
        position: relative;
        font-family: "Montserrat", "Arial", "sans-serif";
        font-size: 12px;
        font-weight: 500;
        margin: 0 30px;

        a {
            color: vars.$color-g-white;
            transition: all 0.12s ease-in;
            font-weight: 500;
            text-transform: uppercase;
        }

        &::before {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translate(-50%, 0) rotate(0);
            width: 0;
            height: 1px;
            background-color: vars.$color-g-blue;
            transition: all 0.12s ease-in;
        }

        &:hover {
            a {
                color: vars.$color-g-blue;
            }

            &::before {
                transform: translate(-50%, 0) rotate(90deg);
                width: 16px;
            }
        }
    }
}
</style>

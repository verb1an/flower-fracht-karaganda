<template>
    <nav class="nav" v-bind="$attr">
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
        to: "/our-stocks",
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
.nav{ 
    .menu {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 520px;
        margin: 0;
        .menu__item {
            position: relative;
            font-family: "Montserrat", "Arial", "sans-serif";
            font-size: 12px;
            font-weight: 500;
            text-align: center;

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

    &.footer__style {
        width: 340px;

        .menu{ 
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            width: 100%;

            .menu__item {
                margin: 0;
                margin-bottom: 20px;
                text-align: left;
                &:nth-child(2), &:nth-child(4) {
                    text-align: right;
                }
                &::before {
                    display: none;
                }
            }
        }
    }
}
</style>

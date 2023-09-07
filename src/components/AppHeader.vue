<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <router-link to="/" class="logo">
                    <img src="@/assets/icons/Logotype.svg" alt="logo flower fracht karaganda" />
                    <span>Flower<br />Fracht<br />Karaganda</span>
                </router-link>

                <div class="header__buttons">
                    <app-main-menu></app-main-menu>

                    <div class="switch__lang">
                        <app-drop-menu
                            :current="lang"
                            :menu="langItems"
                            :style="'border'"
                            @menu:returnValue="(value) => lang = value"
                        ></app-drop-menu>
                    </div>
                </div>
                
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "app-header",
};
</script>

<script setup>
import { ref } from "vue";

const lang = ref(0);
const langItems = ref(["Ru", "En", "Kz", "Es"]);
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";

.header {
    .header__inner {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
    }

    .header__buttons {
        display: flex;
        align-items: center;
    }
}
.logo {
    display: flex;
    align-items: center;

    img {
        margin-right: 10px;
    }

    span {
        font-family: "Roundo";
        font-size: 11px;
        letter-spacing: 1px;
        color: vars.$color-g-white;
        line-height: 1.2;
    }
}
</style>

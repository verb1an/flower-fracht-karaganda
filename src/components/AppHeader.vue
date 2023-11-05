<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <app-logo />

                <div class="header__buttons">
                    <app-main-menu></app-main-menu>

                    <div class="switch__lang">
                        <app-drop-menu
                            v-model="lang"
                            :menu="langItems"
                            :style="'border'"
                            @menu:returnValue="(value) => lang = value"
                        />
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

const lang = ref(1);
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

</style>

<template>
    <main class="main">
        <div class="wrapper">
            <app-header></app-header>
            <router-view
                @modal:show="
                    (value) => {
                        showModalSendOrder = value;
                    }
                "
            ></router-view>

            <app-footer></app-footer>
        </div>

        <app-modal
            :show="showModalSendOrder"
            @modal:show="
                (value) => {
                    showModalSendOrder = value;
                }
            "
        >
            <div class="sendOrder">
                <div class="img"></div>
                <form action="#" class="send-order">
                    <app-title><h3>Заказать звонок</h3></app-title>
                    <div class="text">
                        <p>Закажите звонок и наш менеджер свяжется с вами в ближайшее время</p>
                    </div>
                    <app-input v-model="clientInfo.name" :placeholder="'Имя'" />
                    <app-input v-model="clientInfo.phone" :placeholder="'Номер телефона'" />
                    <app-checkbox>Даю свое согласия на обработку персональных данных</app-checkbox>
                    <app-button>Заказать звонок</app-button>
                </form>
            </div>
        </app-modal>
    </main>
</template>

<script setup>
import { ref, provide } from "vue";

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

const showModalSendOrder = ref(false);
const clientInfo = ref({
    name: "",
    phone: "",
});

provide("main-menu", menuItems);
</script>

<style lang="scss">
@use "@/assets/scss/main";
@use "@/assets/scss/vars";

button {
    background-color: transparent;
    outline: none;
    border: 0;
    cursor: pointer;
}

.sendOrder {
    color: vars.$color-g-white;
}
</style>

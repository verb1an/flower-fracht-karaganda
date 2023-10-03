<template>
    <YandexMap
        :coordinates="coordinates"
        :settings="settings"
        :detailed-controls="detailedControls"
        :controls="controls"
        map-type="hybrid"
    />
</template>

<script>
export default {
    name: "app-map",
};
</script>

<script setup>
    import { YandexMap } from "vue-yandex-maps";
    const settings = {
        apiKey: '408935e7-ab0a-4b59-811b-f9a70134e4ef', // Индивидуальный ключ API
        lang: 'ru_RU', // Используемый язык
        coordorder: 'latlong', // Порядок задания географических координат
        debug: false, // Режим отладки
        version: '2.1' // Версия Я.Карт
    }
    const coordinates = [55, 33];
    const controls = ["fullscreenControl"];
    const detailedControls = { zoomControl: { position: { right: 10, top: 50 } } };
</script>

<style>
.yandex-container {
    height: 400px;
}
</style>

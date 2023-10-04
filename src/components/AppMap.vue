<template>
    <YandexMap
        :coordinates="coords"
        :settings="settings"
        :detailed-controls="detailedControls"
        :controls="controls"
        :zoom="14"
    >
        <YandexMarker v-if="marker" :marker-id="marker.id" :coordinates="marker.coord"></YandexMarker>
    </YandexMap>
</template>

<script>
export default {
    name: "app-map",
};
</script>

<script setup>
import { YandexMap, YandexMarker } from "vue-yandex-maps";
defineProps({
    coords: {
        type: Array,
        required: true
    },
    marker: {
        type: Array,
        required: false
    }
})
const settings = {
    apiKey: "408935e7-ab0a-4b59-811b-f9a70134e4ef",
    lang: "ru_RU",
    coordorder: "latlong",
    debug: false,
    version: "2.1",
};
const controls = ["default"];
const detailedControls = { zoomControl: { position: { right: 10, top: 50 } } };
</script>

<style>
.yandex-container {
    height: 100%;
}
</style>

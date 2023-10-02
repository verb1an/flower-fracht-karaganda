<template>
    <div class="map">
        <GoogleMap
            api-key="AIzaSyC-2aLu03hS4mNU-y9lq8Ky2xKp4hbfQxk"
            style="width: 100%; height: 500px"
            :center="center"
            :zoom="15"
        >
            <Marker :options="{ position: center }" />
        </GoogleMap>
    </div>
</template>

<script>
export default {
    name: "app-map",
};
</script>

<script setup>
import { GoogleMap } from "vue3-google-map";
const props = defineProps({
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
});
const center = {
    lat: props.lat,
    lng: props.lng,
};
</script>

<style lang="scss" scoped>
#map {
    width: 640px;
    height: 480px;
    margin: 0 auto;
    background: gray;
}
</style>

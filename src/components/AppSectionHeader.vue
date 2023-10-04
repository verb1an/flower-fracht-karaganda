<template>
    <section class="section__header" v-bind="$attrs">
        <span class="suptitle">Flower Fracht Karaganda</span>
        <app-title><h2>{{ title }}</h2></app-title>
    </section>
</template>

<script>
export default {
    name: "app-section-header"
}
</script>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.section__header {
    display: block;
    color: vars.$color-g-white;

    span.suptitle {
        display: block;
        font-size: 12px;
        font-weight: 500;
        color: vars.$color-g-lightblue;
        text-transform: uppercase;
        margin-bottom: 10px;
    }

    &.tac {
        text-align: center;
    }
}
</style>
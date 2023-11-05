<template>
    <div 
        :style="slider.getStyle"
        class="slider__item"
    >
        <div class="slider__item_wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-slide-item",
};
</script>

<script setup>
import { inject } from 'vue';

const slider = inject("slider");
</script>

<style lang="scss" scoped>
.slider__item {
    height: 100%;
    // .slider__item_wrapper {
    //     height: 100%;
    //     background-color: #ccc;
    //     border: 1px solid #fff;

    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     font-size: 64px;
    //     font-weight: 600;
    // }
}
</style>

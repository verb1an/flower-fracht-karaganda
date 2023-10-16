<template>
    <div
        :style="`
            transform: translateX(${-(slider.current - 1) * (slideItemWidth + slider.gap.default)}px);
            min-width: ${slideItemWidth}px;
            width: ${slideItemWidth}px;
            margin-right: ${slider.gap.default}px;
            transition: ${slider.transition.default}ms;
        `"
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
import { inject, ref } from "vue";

const slider = inject("slider"),
    sliderWidth = inject("sliderWidth"),
    slideItemWidth = ref( // <!-- ? Check slider viewItems need for el contain full size, without margin-gap -->
        Math.round(sliderWidth / slider.value.viewItems.default) -
            (slider.value.viewItems > 1 ? slider.value.gap.default / 2 : 0)
    );
</script>

<style lang="scss" scoped>
.slider__item {
    height: 100%;

    .slider__item_wrapper {
        height: 100%;
        background-color: #ccc;
        border: 1px solid #fff;

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 64px;
        font-weight: 600;
    }
}
</style>

<template>
    <div class="slider" ref="sliderContent">
        <div class="slider__wrapper" v-if="sliderWidth > 0">
            <slot />
        </div>

        <div class="pagination">
        </div>

        <div class="controlls">
            <button type="button" @click="slider.slidePrev">
                <span class="i-arrow-up"></span>
            </button>
            <button type="button" @click="slider.slideNext">
                <span class="i-arrow-up"></span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-slider",
};
</script>

<script setup>
import { useSlider } from "@/hooks/slider.js";
import { onMounted, provide, ref } from "vue";

const slider = useSlider({
    current: 1,
    pagination: true,
    viewItems: 3,
    gap: 30,
});
const sliderContent = ref(null),
      sliderWidth = ref(0);

provide("slider", slider.config);


onMounted(() => {
    sliderWidth.value = sliderContent.value.getBoundingClientRect().width;
    provide("sliderWidth", sliderWidth.value);
})
</script>

<style lang="scss" scoped>
.slider {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;

    .slider__wrapper {
        display: flex;
        width: 100%;
        overflow: hidden;
    }

    .controlls {
        position: absolute;
        bottom: -40px;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;

            &:first-child {
                transform: rotate(-90deg);
            }

            &:last-child {
                transform: rotate(90deg);
            }
        }

        span {
            font-size: 18px;
            color: #9fccff;
        }
    }
}
</style>

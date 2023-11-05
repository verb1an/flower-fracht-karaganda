<template>
    <div class="v_slider" :class="slider.getType" @click="slider.click" ref="sliderItem">
        <div class="v_slider__wrapper">
            <slot />
        </div>

        <div v-if="slider.getPagination" class="v_pagination">
            <div v-if="!$slots.pagination" class="v_pagination__wrapper">
                <button
                    v-for="pag in slider.getSlides"
                    :key="pag"
                    :data-pag="pag"
                    class="v_button-pag"
                    :class="pag == slider.getCurrent ? 'current' : ''"
                ></button>
            </div>

            <div v-else class="v_pagination__wrapper_custom">
                <slot name="pagination"></slot>
            </div>
        </div>

        <div v-if="slider.getControlls" class="v_controlls">
            <button type="button" class="v_button-move-prev">
                <span class="i-arrow-up"></span>
            </button>
            <button type="button" class="v_button-move-next">
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
import { ref, provide, onMounted, watch } from "vue";
import { useSlider } from "@/hooks/slider";

const props = defineProps({
    params: {
        type: Object,
        required: true,
    },
});

const sliderItem = ref(null);

const slider = new useSlider(sliderItem, props.params);
provide("slider", slider);

onMounted(() => {
    slider.init();

    // <!-- c: Realise in onmounted bcs reconfig use init, and init can run only after onmounted! -->
    // <!-- c: Для тебя тупой, init можно вызвать только в onmounted, можешь попыться сделать это и без него, но он там считает размер контейнера, а как он его посчитает если контейнер не загрузлся дубина -->
    watch(props, (prev, next) => {
        slider.reconfig(next.params);
    });
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.v_slider {
    position: relative;
    width: 100%;
    height: 100%;

    .v_slider__wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .v_pagination {
        position: absolute;
        bottom: -40px;
        left: 50%;
        transform: translate(-50%, 0);

        .v_pagination__wrapper {
            display: flex;
            align-items: center;
        }

        button {
            display: block;
            background-color: vars.$color-g-blue;
            width: 20px;
            height: 20px;
            margin-right: 10px;
            opacity: 0.12;
            transition: all 0.3s ease-in;
            &.current {
                opacity: 1;
            }
        }
    }

    .v_controlls {
        button {
            position: absolute;
            bottom: -40px;

            &:first-child {
                left: 0;
                transform: rotate(-90deg);
            }

            &:last-child {
                right: 0;
                transform: rotate(90deg);
            }
        }

        span {
            font-size: 18px;
            color: #9fccff;
        }
    }

    &.line-fade {
        .v_slider__wrapper {
            display: flex;
            flex-wrap: nowrap;
        }
    }

    &.opacity-fade :deep(.slider__item) {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;

        &.active {
            opacity: 1;
        }
    }
}
</style>

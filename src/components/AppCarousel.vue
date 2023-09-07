<template>
    <section class="slider" id="mainSlider">
        <div class="main__img">
            <img
                v-for="n in carousel.list.length"
                :key="n"
                :src="require(`@/${carousel.list[n - 1].img}`)"
                :alt="'slider carousel flower'"
                :data-current="n - 1 == carousel.active.value"
            />
        </div>

        <div class="controlls">
            <div
                v-for="n in carousel.list.length"
                :key="n"
                :data-show="carousel.list[n - 1].pos <= 3 && carousel.list[n - 1].pos >= 1"
                :pos="carousel.list[n - 1].pos"
                class="cont"
                :style="`transform: translateX(${190 * carousel.list[n - 1].pos}px);`"
            >
                <img
                    :src="require(`@/${carousel.list[n - 1].img}`)"
                    :alt="'slider carousel flower'"
                    :data-target="n - 1"
                    @click="carousel.switchSlide(n - 1)"
                />
            </div>
        </div>

        <app-country-view class="country" :active="carousel.active.value"></app-country-view>
    </section>
</template>

<script>
export default {
    name: "app-carousel",
};
</script>

<script setup>
import { useCarouselIntro } from "@/hooks/carouselIntro";

const props = defineProps({
    list: {
        type: Array,
        required: true,
    },
});

const carousel = useCarouselIntro(props.list);
// console.log(carousel);
</script>

<style lang="scss" scoped>
.slider {
    position: absolute;
    left: 0;
    top: 0;
    .main__img {
        position: relative;
        width: 425px;
        height: 880px;
        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all 0.48s ease-in;
            object-fit: cover;
            opacity: 0;

            &[data-current="true"] {
                opacity: 1;
            }
        }

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(0deg, rgba(26, 38, 51, 0.36) 0%, rgba(26, 38, 51, 0.36) 100%), lightgray 50%;
            opacity: 0.36;
        }
    }

    .controlls {
        position: absolute;
        top: 60%;
        left: 45%;
        z-index: 25;
        display: flex;
        align-items: center;

        .cont {
            position: absolute;
            top: 0;
            left: 0;
            width: 160px;
            height: 250px;
            margin-right: 30px;
            cursor: pointer;
            transition: all 0.24s ease-in;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                opacity: 0;
                transition: all 0.24s ease-in;
            }

            &[data-show="true"] {
                pointer-events: auto;
                width: 160px;

                img {
                    opacity: 1;
                }
            }
        }
    }
}
</style>

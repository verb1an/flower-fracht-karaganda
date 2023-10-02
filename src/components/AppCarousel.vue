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
            <span>{{ carousel.list[carousel.active.value].country }}</span>
        </div>

        <div class="controlls">
            <div
                v-for="n in carousel.list.length"
                :key="n"
                :data-show="carousel.list[n - 1].pos <= 3 && carousel.list[n - 1].pos >= 1"
                :data-pos="carousel.list[n - 1].pos"
                class="cont"
                :style="`transform: translateX(${190 * carousel.list[n - 1].pos}px);`"
            >
                <img
                    :src="require(`@/${carousel.list[n - 1].img}`)"
                    :alt="'slider carousel flower'"
                    :data-target="n - 1"
                    @click="carousel.switchSlide(n - 1)"
                />
                <span class="country__tr">{{ carousel.list[n - 1].country.substr(0, 2) }}</span>
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
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
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

        span {
            position: absolute;
            z-index: 50;
            left: 50%;
            bottom: 60px;
            transform: translate(-50%, 0);
            color: vars.$color-g-white;
            font-size: 14px;
            font-weight: 600;
            line-height: 1.5;
            text-transform: uppercase;
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
            pointer-events: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 160px;
            height: 250px;
            margin-right: 30px;
            cursor: pointer;
            transition: all 0.3s ease-in;

            img {
                width: 160px;
                height: 240px;
                object-fit: cover;
                opacity: 0;
                transition: all 0.24s ease-in;
            }

            .country__tr {
                display: block;
                text-align: center;
                color: vars.$color-g-white;
                font-size: 14px;
                font-weight: 600;
                opacity: 0.6;
                margin: 25px auto;
                transition: all 0.12s ease-in;
                
                &.show__false {
                    opacity: 0;
                }
            }

            &[data-show="true"] {
                pointer-events: auto;
                width: 160px;

                img {
                    opacity: 1;
                }
            }

            &[data-pos="0"] {
                .country__tr {
                    opacity: 0;
                }
            }

            &[data-pos="5"] {
                .country__tr {
                    transition-delay: .3s;
                }
            }

            &:hover {
                .country__tr {
                    opacity: 1;
                }
            }
        }
    }
}
</style>

<template>
    <div class="dropdown__menu" :data-show="show">
        <button class="dropdown__trigger" type="button" :class="'border-' + style" @click="showDropMenu">
            <div v-if="style == 'border'" class="text__slider">
                <app-slider
                    :params="{
                        current: Number(modelValue) + 1,
                        controlls: false,
                        gap: 20,
                        transition: 200,
                    }"
                >
                    <app-slide-item v-for="n in menu.length" :key="n">
                        <span class="line">{{ menu[n - 1] }}</span>
                    </app-slide-item>
                </app-slider>
            </div>

            <span v-else class="text">
                {{ menu[modelValue] }}
             </span>
            <span class="icon i-chevron"></span>
        </button>

        <nav class="dropdown__nav">
            <ul v-if="menu.length" class="menu">
                <li v-for="n in menu.length" :key="n" class="menu__item" :data-value="n - 1" @click="returnValue">
                    {{ menu[n - 1] }}
                </li>
            </ul>
            <slot v-else></slot>
        </nav>
    </div>
</template>

<script>
export default {
    name: "app-drop-menu",
};
</script>

<script setup>
import { ref } from "vue";

const show = ref(false);
defineProps({
    modelValue: {
        type: [Number, String],
        required: true,
    },
    menu: {
        type: Array,
        required: false,
    },
    style: {
        type: String,
        required: false,
        default: "none",
    },
});

const emit = defineEmits(["update:modelValue"]);

function showDropMenu() {
    show.value = !show.value;
    document.addEventListener("click", hideDropMenu);
}

function hideDropMenu(event) {
    if (event.target.closest(".dropdown__menu")) return;
    show.value = false;
    document.removeEventListener("click", hideDropMenu);
}
function returnValue(event) {
    show.value = false;
    console.log(  )
    emit("update:modelValue", event.target.closest(".menu__item").getAttribute("data-value"));
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.dropdown__menu {
    position: relative;

    .dropdown__trigger {
        color: vars.$color-g-white;
        font-size: inherit;
        font-weight: 500;
        min-width: 46px;

        display: flex;
        align-items: center;

        span.text {
            margin-right: 10px;
        }

        &.border-border {
            font-size: 12px;

            .text__slider {
                position: relative;
                overflow: hidden;
                width: 46px;
                height: 46px;
                // padding: 16px 13px;
                text-align: center;
                text-transform: uppercase;
                font-size: 12px;
                font-weight: 600;
                border: 1px solid vars.$color-g-gray;

                span.line {
                    display: block;
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    opacity: 0;
                    padding: 16px 13px;
                }

                .slider__item.active {
                    span.line {
                        opacity: 1;
                    }
                }
            }
        }

        span.icon {
            display: block;
            transform-origin: center;
            transform: rotate(90deg);
            font-size: 12px;
            color: vars.$color-g-blue;
            transition: all 0.12s ease-in;
            margin-left: 10px;
        }
    }

    .dropdown__nav {
        position: absolute;
        top: 100%;
        right: 0;
        transform: translate(0, -20%);
        opacity: 0;
        z-index: 100;
        pointer-events: none;
        transition: all 0.24s ease-in;

        ul {
            padding: 15px 14px;
            min-width: 70px;
            list-style: none;
            color: vars.$color-g-white;
            background-color: vars.$color-g-dopdark;
            border: 1px solid rgba(85, 122, 161, 0.3);

            .menu__item {
                cursor: pointer;
                font-size: 14px;
                font-weight: 400;
                margin-bottom: 8px;
                color: vars.$color-g-light;
                transition: all 0.12s ease-in;

                &:hover {
                    color: vars.$color-g-white;
                }
            }
        }
    }

    &[data-show="true"] {
        .dropdown__nav {
            transform: translate(0, 0);
            pointer-events: auto;
            opacity: 1;
        }
    }

    &:hover {
        .dropdown__trigger span.icon {
            transform: rotate(-90deg);
        }
    }
}
</style>

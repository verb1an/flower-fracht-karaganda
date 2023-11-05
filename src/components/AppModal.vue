<template>
    <div>
        <transition name="_modal-fade" appear>
            <div v-if="show" class="modal" @click="closeModal" ref="modal">
                <div class="modal__wrapper">
                    <button class="button__close" type="button" @click="$emit(`modal:show`, false)">
                        <span class="i-close"></span>
                    </button>

                    <div class="modal__content">
                        <slot />
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "app-modal",
    data() {
        return {
            showed: true,
        };
    },
};
</script>

<script setup>
import { watch } from "vue";
import { getScrollBarWidth } from "@/hooks/getScrollBarWidth";

const props = defineProps({
    show: {
        type: Boolean,
        required: true,
    },
});
const emit = defineEmits(["modal:show"]);

function closeModal(event) {
    if (!event.target.closest(".modal__wrapper")) emit("modal:show", false);
}

watch(props, (prev, next) => {
    const docHTML = document.querySelector("html");

    if (next.show) {
        docHTML.classList.add("hidden");
        docHTML.style = `margin-right: ${getScrollBarWidth()}px`;
    } else {
        setTimeout(() => {
            docHTML.classList.remove("hidden");
            docHTML.style = ``;
        }, 500);
    }
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(22, 33, 46, 0.6);

    .modal__wrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1010px;
        height: 580px;
        background-color: vars.$color-g-dopdark;
    }

    .button__close {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 16px;
        color: vars.$color-g-lightblue;
        padding: 10px;
    }
}

._modal-fade-enter-active,
._modal-fade-leave-active {
    transition: all 0.2s ease-in-out;
}

._modal-fade-enter-from,
._modal-fade-leave-to {
    opacity: 0;
}
</style>

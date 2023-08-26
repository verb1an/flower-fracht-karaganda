<template>
    <div class="input">
        <input type="text" :value="modelValue" :placeholder="placeholder" @input="returnValue" @change="returnValue" />
        <span class="line"></span>
    </div>
</template>

<script>
export default {
    name: "app-input",
};
</script>

<script setup>
import { defineEmits, defineProps } from "vue";

defineProps({
    modelValue: { type: String, required: false, default: "" },
    placeholder: { type: String, required: false, default: "" },
});

const emit = defineEmits(["input", "update:modelValue"]);

function returnValue(event) {
    emit("update:modelValue", event.target.value);
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.input {
    position: relative;
    width: 300px;

    input {
        background-color: transparent;
        width: 100%;
        border: 0;
        outline: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        color: vars.$color-g-white;
        padding: 12px 10px;
        transition: all 0.24s ease-in ;

        &::placeholder {
            color: rgba(255, 255, 255, 0.6);
        }

        &:focus ~ span {
            background-color: vars.$color-g-white;
            width: 100%;
        }
    }

    span {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 1px;
        background-color: vars.$color-g-white;
        transition: all 0.24s ease-in ;
    }

    &.invalid {
        input {
            color: vars.$color-g-red;
        }
        span.line {
            background-color: vars.$color-g-red;
            width: 100%;
            opacity: 0.6;
        }
    }
}
</style>

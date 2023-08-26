<template>
    <div class="radio">
        <div v-for="n in list.length" :key="n" class="radio__button">
            <input type="radio" :name="radioName" :id="`${radioName}-${n}`" :checked="list[n-1].checked">
            <label :for="`${radioName}-${n}`">{{ list[n - 1].text }}</label>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-radio"
}
</script>

<script setup>
import { defineProps } from 'vue';
defineProps({
    list: {
        type: Array,
        required: true
    }
})
const radioName = Math.random() * 100;
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.radio {
    .radio__button {
        input {
            display: none;
        }
        label {
            position: relative;
            cursor: pointer;
            color: vars.$color-g-white;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.7em;
            padding-left: 36px;

            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                transform: translate(0, -50%);
                
                width: 22px;
                height: 22px;
                display: block;
                border: 1px solid rgba(34, 124, 228, 0.36);
                background-color: transparent;
                border-radius: 50%;
                margin-right: 16px;
            }

            &::after {
                content: '';
                position: absolute;
                top: 50%;
                left: 4px;
                transform: translate(0, -50%);
                border-radius: 50%;
                width: 14px;
                height: 14px;
                background-color: transparent;
                transition: all 0.12s ease-in;
            }
        }

        input:checked ~ label {
            &::after {
                background-color: vars.$color-g-blue;
            }
        }
    }
}
</style>

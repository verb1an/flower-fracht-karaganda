<template>
    <div class="checkbox">
        <input type="checkbox" name="checkbox" :id="checkBoxID">
        <label :for="checkBoxID">
            <slot></slot>
        </label>
    </div>
</template>

<script>
export default {
    name: "app-checkbox"
}
</script>

<script setup>
const checkBoxID = Math.random() * 100;
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.checkbox {
    input {
        display: none;
    }

    label {
        color: vars.$color-g-white;
        font-size: 14px;
        font-weight: 400;
        display: flex;
        align-items: center;
        cursor: pointer;

        &::before {
            content: '\e90c';
            font-family: "ffk" !important;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: transparent;
            width: 22px;
            height: 22px;
            margin-right: 16px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            transition: all 0.12s ease-in;
        }
    }

    input:checked ~ label {
        &::before {
            color: vars.$color-g-blue;
            background-color: vars.$color-g-white;
        }
    }
}
</style>
<template>
    <button type="button" class="button">
        <div class="button__wrapper">
            <slot></slot>
        </div>

        <div class="lines">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </button>
</template>

<script>
export default {
    name: "app-button",
};
</script>

<script setup></script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.button {
    position: relative;
    outline: none;
    display: block;
    background: transparent; // <!-- ?  Will be changed -->
    cursor: pointer;

    padding: 25px;
    min-width: 260px;
    border: 1px solid rgba(255, 255, 255, 0.36);
    color: vars.$color-g-white;

    font-family: "Montserrat", "Arial", "sans-serif";
    font-size: 12px;
    font-weight: 500;
    transition: all 0.12s ease-in-out;
    text-transform: uppercase;
    letter-spacing: 1px;

    .lines {
        span {
            position: absolute;
            display: block;
            background-color: vars.$color-g-white;
            transition: all 0.24s ease-in-out;

            &:nth-child(1) {
                bottom: 0;
                left: 0;
                height: 30px;
                width: 1px;
            }
            &:nth-child(2) {
                bottom: 0;
                left: 0;
                height: 1px;
                width: 30px;
            }
            &:nth-child(3) {
                top: 0;
                right: 0;
                height: 30px;
                width: 1px;
            }
            &:nth-child(4) {
                top: 0;
                right: 0;
                height: 1px;
                width: 30px;
            }
        }
    }

    &:hover {
        .lines {
            span:nth-child(1) {
                height: 100%;
            }
            span:nth-child(2) {
                width: 100%;
            }
            span:nth-child(3) {
                height: 100%;
            }
            span:nth-child(4) {
                width: 100%;
            }
        }
    }

    &:active {
        background-color: vars.$color-g-white;
        color: vars.$color-g-blue;
    }
}
</style>

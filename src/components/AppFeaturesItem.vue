<template>

    <!-- 
        ? We pass 2 mandatory slots and 2 additional ones
     -->

    <div class="features__item" v-bind="$attrs">
        <div class="features__item_icon" v-if="$slots.icon">
            <slot name="icon"></slot>
        </div>

        <div class="content">
            <h5 class="features__item_title">
                <slot name="title"></slot>
            </h5>
            <div class="features__item_text">
                <slot name="text"></slot>
            </div>
        </div>
        

        <span class="features__item_step" v-if="$slots.step">
            <slot name="step"></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: "app-features-item"
}
</script>

<script setup>
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.features__item {
    position: relative;
    padding: 40px;
    background-color: vars.$color-g-dopdark;
    border: 1px solid rgba(85, 122, 161, 0.3);
    transition: all 0.2s ease-in;

    display: flex;
    align-items: center;

    .features__item_icon {
        margin-right: 10px;
        height: 82px;
    }

    .features__item_title {
        font-size: 22px;
        font-weight: 600;
        color: vars.$color-g-lightblue;
        margin-bottom: 14px;
    }

    .features__item_text {
        font-size: 16px;
        font-weight: 400;
        color: vars.$color-g-light;
    }

    .features__item_step {
        position: absolute;
        font-size: 30px;
        top: 0;
        right: 20px;
        color: vars.$color-g-light;
        opacity: 0.08;
        font-size: 72px;
        font-weight: 600;
    }

    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-100%, -50%);
        width: 1px;
        height: 50px;
        background-color: vars.$color-g-blue;
    }

    &:hover {
        border: 1px solid rgba(85, 122, 161, 0.6);
    }

}
</style>
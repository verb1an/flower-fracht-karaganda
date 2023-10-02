<template>
    <div class="tabs">

        <div class="tabs__controlls"> 
            <a v-for="n in $slots.default()[0].children.length" :data="n -1 " :key="n-1" class="cont" >
                {{ $slots.default()[0].children[n-1].props.title }}
            </a>
        </div>
        
        <div class="tabs__container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "app-tabs"
}
</script>

<script setup>
import { useSlots } from 'vue';
const slots = useSlots();

console.log(slots.default())
</script>

<style lang="scss" scoped>
@use '@/assets/scss/vars';
.tabs {
    .tabs__controlls {
        display: flex;
        align-items: center;
        .cont {
            padding: 18px 40px;
            margin-right: 16px;
            background-color: vars.$color-g-dopdark;
            border: 1px solid rgba(85, 122, 161, 0.2);
            
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
            color: vars.$color-g-light;

            transition: all 0.1s ease-in;

            &[data-active='true'] {
                color: vars.$color-g-lightblue;
                border: 1px solid vars.$color-g-lightblue;
            }
        }
        
    }

    .tabs__container {
        position: relative;
    }
}
</style>
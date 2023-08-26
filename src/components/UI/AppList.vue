<template>
    <ul class="list" :class="type">
        <li v-for="n in list.length" :key="n" class="list__item">
            <span v-if="type == 'number'">{{ n }}.</span>
            {{ list[n - 1] }}
        </li>
    </ul>
</template>

<script>
export default {
    name: "app-list"
}
</script>

<script setup>
import { defineProps } from 'vue';
defineProps({
    list: {
        type: Array, 
        required: true
    },
    type: {
        type: String,
        required: false,
        default: "box"
    }
})
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.list {
    padding: 0;
    list-style: none;

    .list__item {
        display: flex;
        align-items: center;
        color: vars.$color-g-white;
        font-size: 16px;
        font-weight: 400;

        span {
            margin-right: 5px;
            font-weight: 600;
            color: vars.$color-g-blue;
            width: 20px;
        }
    }

    &.box {
        .list__item::before {
            content: '';
            display: block;
            width: 6px;
            height: 6px;
            background-color: vars.$color-g-blue;
            margin-right: 14px;
        }
    }
}
</style>
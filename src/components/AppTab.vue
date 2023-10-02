<template>
    <div class="tab">
        <slot></slot>
    </div>

    {{ title }}
</template>

<script>
export default {
    name: "app-tab"
}
</script>
<script setup>
defineProps({
    title: {
        type: String,
        required: false
    }
})
</script>

<style lang="scss" scoped>
.tab {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
<template>
    <div class="title">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "app-title"
} 
</script>

<script setup>

</script>

<style lang="scss">
@use "@/assets/scss/vars";
.title {
    h1, h2, h3, h4, h5, h6 {
        font-family: "Montserrat", "Arial", "sans-serif";
        font-weight: 600;
        color: inherit;
        padding: 0;
        margin: 0;
    }

    h1 {
        font-size: 72px;
    }

    h2 {
        font-size: 50px;
    }

    h3 {
        font-size: 42px;
    }

    h4 {
        font-size: 36px;
    }

    h5 {
        font-size: 30px;
    }

    h6 {
        font-size: 22px;
    }
}
</style>
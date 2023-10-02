<template>
    <router-link to="/" class="logo">
        <img src="@/assets/icons/Logotype.svg" alt="logo flower fracht karaganda" />
        <span>Flower<br />Fracht<br />Karaganda</span>
    </router-link>
</template>

<script>
export default {
    name: "app-logo"
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.logo {
    display: flex;
    align-items: center;

    img {
        margin-right: 10px;
    }

    span {
        font-family: "Roundo";
        font-size: 11px;
        letter-spacing: 1px;
        color: vars.$color-g-white;
        line-height: 1.2;
    }
}
</style>
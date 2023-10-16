<template>
    <section class="headers">
        <div class="page__headers">
            <div class="titles">
                <app-section-header>
                    <h1>{{ title }}</h1>
                </app-section-header>
            </div>

            <img class="page__header_bg" :src="require(`@/${imgLink}`)" :alt="`page header ${title}`" />
        </div>
    </section>
</template>

<script>
export default {
    name: "app-page-header",
};
</script>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    imgLink: {
        type: String,
        required: true,
    },
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.headers {
    position: relative;
    color: vars.$color-g-white;
    text-align: center;
    display: grid;
    align-items: center;
    justify-content: center;
    height: 380px;
    width: 100%;

    // background-image: url("@/assets/img/d824092d942b48c2c2690f3233671f43.jpg");
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: 0 center;

    isolation: isolate;

    .titles {
        position: relative;
        z-index: 20;
    }

    .page__header_bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 5;
    }

    &::before {
        content: "";
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: vars.$color-g-darkblue;
        opacity: 0.42;
        z-index: 10;
        filter: brightness();
    }
}
</style>

<template>
    <main class="main">
        <div class="wrapper">
            <app-header></app-header>
            <router-view></router-view>

            <app-footer></app-footer>
        </div>
    </main>
</template>

<script setup></script>

<style lang="scss">
@use "@/assets/scss/main";
</style>

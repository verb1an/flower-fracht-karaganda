<template>
    <section class="section footer">
        <div class="container">
            <div class="section__inner">
                <app-logo />
                <app-main-menu class="footer__style"></app-main-menu>
                <div class="contacts">
                    <a href="tel:+74957378585"><span class="i-phone"></span>+7 (495) 737 8585</a>
                    <a href="mailto:ffkaragandainfo@info.ru"><span class="i-mail"></span>ffkaragandainfo@info.ru</a>
                </div>
                <div class="copyright">
                    <a href="#">Политика конфеденциальности</a>
                    <span class="cpr">Copyright ©  2023  All rights reserved</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "app-footer"
}
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.section.footer {
    color: vars.$color-g-white;

    .section__inner {
        display: grid;
        grid-template-columns: 1fr 520px 1fr 1fr;
        align-items: start;
    }

    .contacts, .copyright {
        display: grid;
        grid-template-rows: repeat(2, 1fr);

        a, span {
            margin-bottom: 14px;
        }
    }
    .nav {
        max-width: 400px;
    }
}
</style>
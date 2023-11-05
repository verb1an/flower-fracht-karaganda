<template>
    <!-- todo: Add some styles -->
    <section class="section callback">
        <div class="container">
            <div class="section__inner">
                <app-section-header>
                    <h2>Заказать звонок</h2>
                </app-section-header>
                <span class="subtitle">Закажите звонок и наш менеджер свяжется с вами в ближайшее время</span>
                <form action="#">
                    <div class="data__inputs">
                        <app-input :placeholder="'Имя'" />
                        <app-input :placeholder="'Номер телефона'" />
                    </div>
                    <div class="buttons">
                        <app-checkbox>
                            <span>Даю свое согласия на обработку <a href="#">персональных данных</a></span>
                        </app-checkbox>
                        <app-button @click="$emit(`modal:show`, true)">Заказать звонок</app-button>
                    </div>
                </form>
            </div>
        </div>

        <div class="bgc">
            <span class="bgc-1"></span>
            <span class="bgc-2"></span>
            <span class="bgc-3"></span>
        </div>
    </section>
</template>

<script>
export default {
    name: "app-callback",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.section.callback {
    position: relative;
    width: 100%;
    height: 585px;

    .section__inner {
        position: relative;
        isolation: isolate;
        z-index: 20;
        color: vars.$color-g-white;
    }

    .bgc {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        top: 0;
        left: 0;
        z-index: 10;

        span {
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .bgc-1 {
            width: 50%;
            background-image: url("@/assets/img/07da59bf47ace714d5640f79e8491c83.jpg");
        }
        .bgc-2 {
            width: 22%;
            background-image: url("@/assets/img/8ba558ae1d3e869ce606a3ffe1b245fb.jpg");
        }

        .bgc-3 {
            width: 28%;
            background-image: url("@/assets/img/053491f4432b585c8ace59ec29fbe13d.jpg");
        }
    }
}
</style>

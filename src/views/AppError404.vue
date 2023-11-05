<!-- /* eslint-disable */ -->
<template>
    <section class="section app404">
        <div class="container">
            <div class="section__inner">

                <app-section-header class="tac">

                    <template #suptitle><span style="color: #fff;">Ошибка</span></template>

                    <h2 style="font-size: 280px;">404</h2>
                </app-section-header>

                <div class="text">
                    <p>К сожалению страница не найдена, скорее всего она была удалена. Рекомендуем вернуться на главную.</p>
                    <app-button @click="$router.push(`/`)">
                        Главная
                    </app-button>
                </div>

            </div>
        </div>

        <div class="country-img">
            <img src="@/assets/icons/world-map.svg" alt="">
        </div>
        <div class="bg"></div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.app404 {
    position: relative;
    height: 100vh;

    .section__inner {
        position: relative;
        isolation: isolate;
        z-index: 20;

        .text {
            display: flex;
            flex-direction: column;
            align-items: center;

            p {
                position: relative;
                max-width: 750px;
                font-size: 18px;
                line-height: 26px;
                color: vars.$color-g-white;
                text-align: center;
                margin-bottom: 60px;
                padding-top: 30px;

                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translate(-50%, 0);
                    height: 1px;
                    width: 60px;
                    background-color: vars.$color-g-white;
                }
            }
        }
    }

    .country-img {
        position: absolute;
        top: 80%;
        left: 85%;
        transform: translate(-50%, -50%);

        z-index: 20;

        img {
            width: 386px;
            height: 102px;
        }
    }

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url("@/assets/img/1918f197a5f371cdcc1a36b13d1dd05e.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        z-index: 10;
    }
}
</style>
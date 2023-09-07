<template>
    <section class="section intro">
        <div class="container">
            <div class="section__inner">
                <app-carousel :list="carouselIntroItems" />

                <div class="content">
                    <div class="headers">
                        <app-title class="suptitle"><h6 style="font-size: 12px; font-weight: 500; text-transform: uppercase;">Flower Fracht Karaganda</h6></app-title>
                        <app-title><h1 style="font-size: 72px; font-weight: 600;">Авиаперевозка<br>цветов</h1></app-title>

                        <ul class="list">
                            <li><span></span>Занимаемся только АВИА перевозкой свеже срезанных цветов и растений из<br><b>Эквадора</b>,<b>Кении</b>, <b>Колумбии</b>, <b>Чили</b>, <b>Нидерландов</b>, <b>Израиля</b> до конечного заказчика.</li>
                            <li><span></span>Максимальный срок доставки товара – 7 дней от заказа.</li>
                        </ul>
                    </div>
                    <div class="contacts">
                        <a href="tel:+74957378585"><span class="i-phone"></span>+7 (495) 737 8585</a>
                        <a href="mailto:ffkaragandainfo@info.ru"><span class="i-mail"></span>ffkaragandainfo@info.ru</a>
                        <app-button>Связаться с нами</app-button>
                    </div>
                </div>

                <span class="bgc"></span>
            </div>
        </div>
    </section>
</template>

<script setup>
const carouselIntroItems = [
    "assets/img/carousel/carousel-с7fe20029d89cca5e49daf963db4dfbda.jpg",
    "assets/img/carousel/carousel-be32d90b8e790c4043cdeff255fc5aa3.jpg",
    "assets/img/carousel/carousel-ad01dbe31dc52a69770ecc2b08c16bc5.jpg",
    "assets/img/carousel/carousel-be2dedc9e68e48a5f8fa7b3c6ae4bbff.jpg",
    "assets/img/carousel/carousel-4ec23bfd23bee8165fc8b653d984712b.jpg",
    "assets/img/carousel/carousel-efd3ff81a3a199c1b012346b9a166293.jpg",
];
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.section.intro {
    position: relative;
    height: 880px;
    width: 100%;
    padding: 80px 0;
    .content {
        position: relative;
        display: flex;
        align-items: start;
        justify-content: space-between;
        isolation: isolate;
        z-index: 25;
        margin: 0 50px 0 300px;

        .headers {
            padding: 0 40px;

            .suptitle {
                margin-bottom: 20px;
            }

            .list {
                padding: 0;
                list-style: none;

                max-width: 750px;
                color: vars.$color-g-white;
                font-size: 16px;
                line-height: 1.4;
                margin-top: 40px;

                li {
                    position: relative;
                    margin-bottom: 20px;
                    padding-left: 0;
                    padding-top: 2px;

                    span {
                        position: absolute;
                        display: block;
                        left: -54px;
                        top: 0;
                        width: 31px;
                        height: 31px;
                        border: 1px solid rgba(255, 255, 255, 0.07);
                        border-radius: 50%;

                        &::before {
                            content: '';
                            position: absolute;
                            width: 5px;
                            height: 5px;
                            background-color: vars.$color-g-lightblue;
                            top: 50%;
                            left: 50%;
                            border-radius: 50%;
                            transform: translate(-50%, -50%);
                        }
                    }
                }
            }

            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 42px;
                width: 1px;
                height: 60px;
                background-color: vars.$color-g-white;
            }
        }

        .contacts {
            display: flex;
            flex-direction: column;
            margin: 40px 0;
            
            a {
                display: block;
                color: vars.$color-g-white;
                font-size: 16px;
                font-weight: 400;
                margin-bottom: 20px;

                span {
                    width: 16px;
                    margin-right: 16px;
                }
            }

            .button {
                    margin: 10px 0;
                }
        }
    }

    .country {
        position: absolute;
        top: 50%;
        left: 70%;
        z-index: 50;
    }

    span.bgc {
        position: absolute;
        isolation: isolate;
        top: 0;
        background: linear-gradient(0deg, rgba(26, 38, 51, 0.36) 0%, rgba(26, 38, 51, 0.36) 100%),
            url("@/assets/img/809f0f176181ac26f115c972040ece07.jpg"), lightgray;
        background-size: cover;
        background-repeat: no-repeat;
        left: 425px;
        width: calc(100% - 425px);
        height: 100%;
        z-index: 5;
    }
}
</style>

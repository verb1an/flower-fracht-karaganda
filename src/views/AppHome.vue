<template>
    <section class="section intro">
        <div class="container">
            <div class="section__inner">
                <section class="main__slider">
                    <app-slider
                        :params="{
                            current: activeSlide,
                            type: 'opacity-fade',
                            pagination: true,
                            controlls: false,
                        }"
                    >
                        <app-slide-item v-for="item in carouselIntroItems" :key="item.img">
                            <div class="slide">
                                <img :src="require(`@/${item.img}`)" alt="slider flower carousel" />
                            </div>
                        </app-slide-item>

                        <template #pagination>
                            <div class="pagination">
                                <button
                                    v-for="(item, n) in carouselIntroItems"
                                    :key="item.img"
                                    type="button"
                                    class="button__pagination v_button-pag"
                                    :data-pag="n + 1"
                                    :data-show="carousel.getPosList[n] <= 3 && carousel.getPosList[n] >= 1"
                                    :data-pos="carousel.getPosList[n]"
                                    :style="`transform: translateX(${190 * carousel.getPosList[n]}px);`"
                                    @click="carousel.switchSlide(n)"
                                >
                                    <img :src="require(`@/${item.img}`)" alt="slider flower pagination" />
                                    <span class="country__tr">{{ carouselIntroItems[n].country.substr(0, 2) }}</span>
                                </button>
                            </div>
                        </template>
                    </app-slider>
                </section>

                <div class="content">
                    <div class="headers">
                        <app-title class="suptitle"
                            ><h6 style="font-size: 12px; font-weight: 500; text-transform: uppercase">
                                Flower Fracht Karaganda
                            </h6></app-title
                        >
                        <app-title
                            ><h1 style="font-size: 72px; font-weight: 600">Авиаперевозка<br />цветов</h1></app-title
                        >

                        <ul class="list">
                            <li>
                                <span></span>Занимаемся только АВИА перевозкой свеже срезанных цветов и растений из<br /><b
                                    >Эквадора</b
                                >,<b>Кении</b>, <b>Колумбии</b>, <b>Чили</b>, <b>Нидерландов</b>, <b>Израиля</b> до
                                конечного заказчика.
                            </li>
                            <li><span></span>Максимальный срок доставки товара - 7 дней от заказа.</li>
                        </ul>
                    </div>
                    <div class="contacts">
                        <a href="tel:+74957378585"><span class="i-phone"></span>+7 (495) 737 8585</a>
                        <a href="mailto:ffkaragandainfo@info.ru"><span class="i-mail"></span>ffkaragandainfo@info.ru</a>
                        <app-button @click="$emit(`modal:show`, true)">Связаться c нами</app-button>
                    </div>
                </div>

                <span class="bgc"></span>
            </div>
        </div>
    </section>
    <section class="section features">
        <div class="container">
            <div class="section__inner">
                <app-section-header class="tac">
                    <h2>О нас в цифрах</h2>
                </app-section-header>
                <!-- todo: Add content -->
                <div class="content">
                    <app-features-item>
                        <template #icon>
                            <img src="@/assets/icons/features/i-calendar.svg" alt="calendar" />
                        </template>
                        <template #title>
                            <app-title><h5>7 лет</h5></app-title>
                        </template>
                        <template #text>
                            <p>Успешно работаем уже более семи лет</p>
                        </template>
                    </app-features-item>
                    <app-features-item>
                        <template #icon>
                            <img src="@/assets/icons/features/i-calendar.svg" alt="calendar" />
                        </template>
                        <template #title>
                            <app-title><h5>7 лет</h5></app-title>
                        </template>
                        <template #text>
                            <p>Успешно работаем уже более семи лет</p>
                        </template>
                    </app-features-item>
                    <app-features-item>
                        <template #icon>
                            <img src="@/assets/icons/features/i-calendar.svg" alt="calendar" />
                        </template>
                        <template #title>
                            <app-title><h5>7 лет</h5></app-title>
                        </template>
                        <template #text>
                            <p>Успешно работаем уже более семи лет</p>
                        </template>
                    </app-features-item>
                    <app-features-item>
                        <template #icon>
                            <img src="@/assets/icons/features/i-calendar.svg" alt="calendar" />
                        </template>
                        <template #title>
                            <app-title><h5>7 лет</h5></app-title>
                        </template>
                        <template #text>
                            <p>Успешно работаем уже более семи лет</p>
                        </template>
                    </app-features-item>
                    <app-features-item>
                        <template #icon>
                            <img src="@/assets/icons/features/i-calendar.svg" alt="calendar" />
                        </template>
                        <template #title>
                            <app-title><h5>7 лет</h5></app-title>
                        </template>
                        <template #text>
                            <p>Успешно работаем уже более семи лет</p>
                        </template>
                    </app-features-item>
                    <app-features-item>
                        <template #icon>
                            <img src="@/assets/icons/features/i-calendar.svg" alt="calendar" />
                        </template>
                        <template #title>
                            <app-title><h5>7 лет</h5></app-title>
                        </template>
                        <template #text>
                            <p>Успешно работаем уже более семи лет</p>
                        </template>
                    </app-features-item>
                </div>
            </div>
        </div>
    </section>

    <!-- todo: Replace map, add styles and content -->
    <section class="section map">
        <div class="container">
            <div class="section__inner">
                <div class="headers">
                    <app-section-header>
                        <h2>Откуда мы везем наши цветы?</h2>
                    </app-section-header>

                    <p class="subtitle">
                        Мы рады предложить Вам надежную и быструю доставку свежих и красивых цветов из разных уголков
                        мира
                    </p>
                    <p>
                        Мы гордимся нашими партнерами в каждой из этих стран и уверены, что доставим Вам самые красивые
                        и свежие цветы из разных уголков мира. Свяжитесь с нами прямо сейчас и сделайте свое особенное
                        мероприятие незабываемым с помощью наших цветовых композиций
                    </p>
                    <p>
                        Мы привозим цветы и растения в горшках из <b>Эквадора</b>, <b>Кении</b>, <b>Колумбии</b>,
                        <b>Чили</b>, <b>Нидерландов</b>, <b>Израиля</b> и доставляем их свежими во все регионы СНГ.
                    </p>

                    <app-button @click="$emit(`modal:show`, true)">Связаться с нами</app-button>
                </div>
                <div class="content">
                    <img src="@/assets/img/map.png" alt="" />
                </div>
            </div>
        </div>

        <span class="bg"></span>
    </section>
    <section class="section calculator__date">
        <div class="container">
            <div class="section__inner">
                <div class="content"></div>
                <div class="headers">
                    <app-section-header>
                        <h2>Калькулятор доставки</h2>
                    </app-section-header>
                    <!-- todo: Rewrite component on tabs and add some styles -->
                    <div class="tabs">
                        <div class="tab step">
                            <a class="tab__title">Выберите страну по которой хотите узнать время доставки</a>
                            <div class="tab__content">
                                <app-radio :list="country"></app-radio>
                            </div>
                        </div>
                        <div class="tab step">
                            <a class="tab__title"
                                >Что бы рассчитать дату доставки выберите день когда планируете сделать заказ</a
                            >
                            <div class="tab__content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- todo: Add images and styles -->
    <section class="section price__list">
        <div class="container">
            <div class="section__inner">
                <div class="headers">
                    <app-section-header class="tac">
                        <h2>Основные тарифы</h2>
                    </app-section-header>
                </div>
                <div class="content">
                    <div class="price__item">
                        <div class="price__item_content"></div>
                    </div>
                    <div class="price__item">
                        <div class="price__item_content">
                            <app-button>Скачать прайс</app-button>
                        </div>
                    </div>
                    <div class="price__item">
                        <div class="price__item_content"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <app-callback></app-callback>
</template>

<script setup>
import { ref } from "vue";
import { useCarouselIntro } from "@/hooks/carouselIntro";

defineEmits([
    "modal:show"
])

const carouselIntroItems = [
    { img: "assets/img/carousel/carousel-с7fe20029d89cca5e49daf963db4dfbda.jpg", country: "Ecuador" },
    { img: "assets/img/carousel/carousel-be32d90b8e790c4043cdeff255fc5aa3.jpg", country: "Kenya" },
    { img: "assets/img/carousel/carousel-ad01dbe31dc52a69770ecc2b08c16bc5.jpg", country: "Colombia" },
    { img: "assets/img/carousel/carousel-be2dedc9e68e48a5f8fa7b3c6ae4bbff.jpg", country: "Chile" },
    { img: "assets/img/carousel/carousel-4ec23bfd23bee8165fc8b653d984712b.jpg", country: "Netherlands" },
    { img: "assets/img/carousel/carousel-efd3ff81a3a199c1b012346b9a166293.jpg", country: "Israel" },
];

const country = [
    { text: "Эквадор", checked: true },
    { text: "Кения", checked: false },
    { text: "Колумбия", checked: false },
    { text: "Чили", checked: false },
    { text: "Нидерландов", checked: false },
    { text: "Израиль", checked: false },
];
const activeSlide = ref(1);

const carousel = new useCarouselIntro(activeSlide.value, carouselIntroItems.length);
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";

.main__slider {
    position: absolute;
    left: 0;
    top: 0;
    width: 425px;
    height: 880px;
    z-index: 25;

    .slide {
        position: relative;
        width: 425px;
        height: 880px;

        img {
            width: 425px;
            height: 880px;
            object-fit: cover;
        }
    }

    .pagination {
        position: absolute;
        top: -400px;
        left: 45%;
        z-index: 25;
        display: flex;
        align-items: center;

        .button__pagination {
            pointer-events: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 160px;
            height: 250px;
            margin-right: 30px;
            cursor: pointer;
            transition: all 0.3s ease-in;

            img {
                width: 160px;
                height: 240px;
                object-fit: cover;
                opacity: 0;
                transition: all 0.24s ease-in;
            }

            .country__tr {
                display: block;
                text-align: center;
                color: vars.$color-g-white;
                font-size: 14px;
                font-weight: 600;
                opacity: 0.6;
                margin: 25px auto;
                transition: all 0.12s ease-in;

                &.show__false {
                    opacity: 0;
                }
            }

            &[data-show="true"] {
                pointer-events: auto;
                width: 160px;

                img {
                    opacity: 1;
                }
            }

            &[data-pos="0"] {
                .country__tr {
                    opacity: 0;
                }
            }

            &[data-pos="5"] {
                .country__tr {
                    transition-delay: 0.3s;
                }
            }

            &:hover {
                .country__tr {
                    opacity: 1;
                }
            }
        }
    }
}

.section.intro {
    position: relative;
    height: 880px;
    width: 100%;
    padding: 80px 0;

    .section__inner {
        isolation: isolate;
    }
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

            .title {
                color: vars.$color-g-white;
            }

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
                            content: "";
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
                content: "";
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
.section.features {
    .section__inner {
        padding: 120px 0;
        .content {
            display: grid;
            grid-template-columns: 33% 33% 33%;
            column-gap: 30px;
            row-gap: 30px;
        }
    }

    .section__header {
        margin-bottom: 55px;
    }
}
.section.map {
    position: relative;
    background-image: url("@/assets/img/b21d41b24c4b5beb7b432ee1a246b53b.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left 50%;
    z-index: 10;

    .container {
        z-index: 20;
    }

    .section__inner {
        position: relative;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding: 120px 0;
        isolation: isolate;
        z-index: 20;
    }

    .headers {
        max-width: 580px;

        .section__header {
            margin-bottom: 55px;
        }

        p {
            color: vars.$color-g-light;
            margin-bottom: 25px;
            font-weight: 400;
            font-size: 16px;
            line-height: 1.5;

            b {
                color: vars.$color-g-white;
            }

            &.subtitle {
                color: vars.$color-g-white;
                font-weight: 600;
            }
        }

        .button {
            margin-top: 90px;
        }
    }

    .bg {
        background-color: vars.$color-g-dark;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        opacity: 0.97;
    }
}
.section.calculator__date {
    .section__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .content {
        width: 880px;
        height: 560px;
        background-color: vars.$color-g-dopdark;
        margin-right: 80px;
    }
}
.section.price__list {
    .content {
        display: flex;
        align-items: center;
        margin-top: 55px;
        .price__item {
            width: 490px;
            height: 260px;
            background-color: rgba(85, 122, 161, 0.2);
            margin: 0 15px;

            .price__item_content {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
            }
        }
    }
}
</style>

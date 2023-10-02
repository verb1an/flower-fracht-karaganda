<template>
    <section class="section ourstocks__header">
        <div class="headers">
            <div class="titles">
                <app-title class="suptitle"
                    ><h6 style="font-size: 12px; font-weight: 500; text-transform: uppercase">
                        Flower Fracht Karaganda
                    </h6></app-title
                >
                <app-title><h2 style="font-size: 72px; font-weight: 600">Наши склады</h2></app-title>
            </div>
        </div>
    </section>

    <section class="section stocks__placement">
        <div class="container">
            <div class="section__inner">
                <div class="stock">
                    <OverlayScrollbarsComponent defer>
                        <div class="tab__wrapper">
                            <div
                                class="tab__cities"
                                v-for="(item, n) in currentStockInfo.data"
                                :key="item"
                                :class="n == 0 ? 'show' : ''"
                            >
                                <a class="title" data-targetElement="tab__cities" @click="showHideTabInfo">
                                    <h3>
                                        <span class="i-marker"></span><span>{{ item.cityName }}</span>
                                    </h3>
                                </a>
                                <div class="address__wrapper">
                                    <div
                                        v-for="(address, n) in item.addresses"
                                        :key="address.address"
                                        class="addresses"
                                        :class="n == 0 ? 'show' : ''"
                                    >
                                        <a
                                            class="address__title"
                                            data-targetElement="addresses"
                                            @click="showHideTabInfo"
                                        >
                                            <h4>{{ address.addressName }}</h4>
                                        </a>
                                        <div class="address__info work__time">
                                            <h4 class="address__info_title work__time_title">Режим работы:</h4>
                                            <span>{{ address.working_hours[0] }}</span>
                                            <span>{{ address.working_hours[1] }}</span>
                                        </div>
                                        <div class="address__info work__time">
                                            <h4 class="address__info_title contacts_title">Контакты:</h4>
                                            <span>{{ address.contacts[0] }}</span>
                                            <span>{{ address.contacts[1] }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OverlayScrollbarsComponent>
                </div>
            </div>
        </div>
    </section>

    <!-- ! This will be map testing it will be transferred to the block with information about the location -->
    <!-- <section class="section map">
        <div class="container">
            <div class="section__inner">
                <app-map :lat="55.71965043274948" :lng="37.430806311278836" />
            </div>
        </div>
    </section> -->
</template>

<script setup>
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue";
import "overlayscrollbars/overlayscrollbars.css";

const currentStockInfo = {
    id: 1,
    country: "Россия",
    data: [
        {
            cityName: "Москва",
            addresses: [
                {
                    addressName: "ул. Петра Сокола, 14",
                    working_hours: ["Пн-П тс 9:00 до 18:00", "Сб-Вс выходной"],
                    contacts: ["+57 1 567 44 87 Олег", "+57 1 567 44 82 Леся"],
                },
                {
                    addressName: "ул. Ленина, 18",
                    working_hours: ["Пн-П тс 9:00 до 18:00", "Сб-Вс выходной"],
                    contacts: ["+57 1 567 44 87 Вячеслав", "+57 1 567 44 82 Ольга"],
                },
                {
                    addressName: "ул. Пушкина, 161",
                    working_hours: ["Пн-П тс 9:00 до 18:00", "Сб-Вс выходной"],
                    contacts: ["+57 1 567 44 87 Иван", "+57 1 567 44 82 Никита"],
                },
            ],
        },
        {
            cityName: "Санкт-Петербург",
            addresses: [
                {
                    addressName: "ул. Петра Сокола, 14",
                    working_hours: ["Пн-П тс 9:00 до 18:00", "Сб-Вс выходной"],
                    contacts: ["+57 1 567 44 87 Олег", "+57 1 567 44 82 Леся"],
                },
                {
                    addressName: "ул. Ленина, 18",
                    working_hours: ["Пн-П тс 9:00 до 18:00", "Сб-Вс выходной"],
                    contacts: ["+57 1 567 44 87 Вячеслав", "+57 1 567 44 82 Ольга"],
                },
                {
                    addressName: "ул. Пушкина, 161",
                    working_hours: ["Пн-П тс 9:00 до 18:00", "Сб-Вс выходной"],
                    contacts: ["+57 1 567 44 87 Иван", "+57 1 567 44 82 Никита"],
                },
            ],
        },
    ],
};

const showHideTabInfo = (event) => {
    console.log(event.target);
    event.target.closest(`.${event.target.closest("a").getAttribute("data-targetElement")}`).classList.toggle("show");
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";

.ourstocks__header {
    padding: 0;
    .headers {
        position: relative;
        color: vars.$color-g-white;
        text-align: center;
        display: grid;
        align-items: center;
        justify-content: center;
        height: 380px;
        width: 100%;

        background-image: url("@/assets/img/d824092d942b48c2c2690f3233671f43.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 center;

        isolation: isolate;

        .titles {
            position: relative;
            z-index: 10;
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
            z-index: 5;
            filter: brightness();
        }
    }
}
section.stocks__placement {
    padding: 0;

    .stock {
        position: relative;
        background-color: vars.$color-g-dopdark;
        margin: 50px 0 0 0;
        width: 20%;
        height: 690px;
        overflow: hidden;
        border: 1px solid rgba(85, 122, 161, 0.2);

        .tab__wrapper {
            height: auto;
            max-height: 690px;
            width: 100%;
        }

        .tab__cities {
            position: relative;
            color: vars.$color-g-light;
            padding: 5px 40px;

            .title {
                color: vars.$color-g-white;
                display: flex;
                align-items: center;
                cursor: pointer;
                padding: 35px 0 35px 0;

                h3 {
                    font-size: 18px;
                }

                span {
                    font-size: 18px;
                    line-height: 1.5;

                    &:first-child {
                        margin-right: 16px;
                        font-size: 18px;
                        line-height: 1.5;
                    }
                }
            }

            .address__wrapper {
                max-height: 0;
                padding: 0;
                overflow: hidden;
                transition: all 0.3s ease-in;
                opacity: 0;
            }

            .addresses {
                margin-bottom: 20px;
                .address__title {
                    color: vars.$color-g-light;
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    text-transform: uppercase;
                    opacity: 0.7;
                    transition: all 0.3s ease-in;
                    display: flex;
                    align-items: center;

                    &::before {
                        content: "—";
                        margin-right: 12px;
                    }
                }

                .address__info {
                    margin: 0;
                    padding: 0 28px;
                    height: 0;
                    opacity: 0;
                    overflow: hidden;
                    transition: all 0.3s ease-in;
                    .address__info_title {
                        font-size: 14px;
                        font-weight: 600;
                        margin-bottom: 10px;
                    }

                    span {
                        display: block;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 1.6;
                    }
                }

                &.show {
                    .address__title {
                        color: vars.$color-g-blue;
                        opacity: 1;
                    }
                    .address__info {
                        height: 100%;
                        margin: 24px 0 20px 0;
                        opacity: 1;
                    }
                }
            }

            &.show {
                .address__wrapper {
                    max-height: 2000px;
                    padding: 0 0 32px 0;
                    opacity: 1;
                }
            }

            &::before {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background-color: rgba(85, 122, 161, 0.3);
            }
        }
    }
}
</style>

<style lang="scss">
@use "@/assets/scss/vars";
.os-scrollbar {
    --os-padding-axis: 40px;
    --os-track-bg: rgba(85, 122, 161, 0.2);
    --os-track-bg-hover: rgba(85, 122, 161, 0.2);
    --os-track-bg-active: rgba(85, 122, 161, 0.2);
    --os-handle-bg: #227ce4;
    --os-handle-bg-hover: #227ce4;
    --os-handle-bg-active: #227ce4;
    margin-right: 10px;
}
</style>

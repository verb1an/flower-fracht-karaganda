<template>

    <app-page-header :title="'Наши склады'" :imgLink="'assets/img/d824092d942b48c2c2690f3233671f43.jpg'" />

    <section class="section stocks__placement">
        <div class="container">
            <div class="section__inner">
                <div class="stock">
                    <div class="tab">
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
                    <div class="map">
                        <app-map :coords="coordinates" :marker="{id: 'stocks-map', coord: coordinates}" />
                    </div>
                </div>

            </div>
        </div>
    </section>
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
                    addressName: "Шоссейный пр., 12",
                    working_hours: ["Пн-П тс 9:00 до 18:00", "Сб-Вс выходной"],
                    contacts: ["+57 1 567 44 87 Олег", "+57 1 567 44 82 Леся"],
                    coord: [55.70642657884516, 37.71220213865642]
                },
                {
                    addressName: "ул. Большая Академическая, 39",
                    working_hours: ["Пн-П тс 9:00 до 18:00", "Сб-Вс выходной"],
                    contacts: ["+57 1 567 44 87 Вячеслав", "+57 1 567 44 82 Ольга"],
                    coord: [55.834057347841366, 37.53226836606536]
                },
                {
                    addressName: "ул. Ибрагимова, 35 строение 2",
                    working_hours: ["Пн-П тс 9:00 до 18:00", "Сб-Вс выходной"],
                    contacts: ["+57 1 567 44 87 Иван", "+57 1 567 44 82 Никита"],
                    coord: [55.79044442877542, 37.72840105731016]
                },
            ],
        },
        {
            cityName: "Санкт-Петербург",
            addresses: [
                {
                    addressName: "Шоссейный пр., 12",
                    working_hours: ["Пн-П тс 9:00 до 18:00", "Сб-Вс выходной"],
                    contacts: ["+57 1 567 44 87 Олег", "+57 1 567 44 82 Леся"],
                    coord: [55.70642657884516, 37.71220213865642]
                },
                {
                    addressName: "ул. Большая Академическая, 39",
                    working_hours: ["Пн-П тс 9:00 до 18:00", "Сб-Вс выходной"],
                    contacts: ["+57 1 567 44 87 Вячеслав", "+57 1 567 44 82 Ольга"],
                    coord: [55.834057347841366, 37.53226836606536]
                },
                {
                    addressName: "ул. Ибрагимова, 35 строение 2",
                    working_hours: ["Пн-П тс 9:00 до 18:00", "Сб-Вс выходной"],
                    contacts: ["+57 1 567 44 87 Иван", "+57 1 567 44 82 Никита"],
                    coord: [55.79044442877542, 37.72840105731016]
                },
            ],
        },
    ],
};

const showHideTabInfo = (event) => {
    event.target.closest(`.${event.target.closest("a").getAttribute("data-targetElement")}`).classList.toggle("show");
};

/* 
    <!-- todo: add change map address on change tab or address -->
*/

const coordinates = [55.70642657884516, 37.71220213865642];

</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";

section.stocks__placement {
    padding: 0;
    .stock {
        position: relative;
        background-color: vars.$color-g-dopdark;
        margin: 50px 0 0 0;
        width: 100%;
        height: 690px;
        overflow: hidden;
        border: 1px solid rgba(85, 122, 161, 0.2);

        display: flex;
        align-items: center;

        .tab {
            width: 20%;
            height: 100%;
        }

        .map {
            width: 80%;
            height: 690px;
        }

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

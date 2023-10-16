<template>
    <app-page-header :title="'Контакты'" :imgLink="'assets/img/c90e96414d58b9588356d946c0c0ee09.jpg'" />

    <section class="section contacts">
        <div class="container">
            <div class="section__inner">
                <div class="features">
                    <app-features-item>
                        <template #icon>
                            <img src="@/assets/icons/features/i-phone.svg" alt="contacts phone-number">
                        </template>
                        <template #title>
                            <app-title><h6>Телефон</h6></app-title>
                        </template>
                        <template #text>
                            <p>+7 (495) 737 8585</p>
                            <p>+7 (495) 737 8282</p>
                        </template>
                    </app-features-item>
                    <app-features-item>
                        <template #icon>
                            <img src="@/assets/icons/features/i-phone.svg" alt="contacts phone-number">
                        </template>
                        <template #title>
                            <app-title><h6>Телефон</h6></app-title>
                        </template>
                        <template #text>
                            <p>+7 (495) 737 8585</p>
                            <p>+7 (495) 737 8282</p>
                        </template>
                    </app-features-item>
                    <app-features-item>
                        <template #icon>
                            <img src="@/assets/icons/features/i-phone.svg" alt="contacts phone-number">
                        </template>
                        <template #title>
                            <app-title><h6>Телефон</h6></app-title>
                        </template>
                        <template #text>
                            <p>+7 (495) 737 8585</p>
                            <p>+7 (495) 737 8282</p>
                        </template>
                    </app-features-item>
                </div>
                <div class="office">
                    <img src="@/assets/img/5ddc1e95383dbbe459c7e0784d15a2e2.jpg" alt="office">

                    <div class="map">
                        <app-map :coords="[49.81189923712629, 73.08419055681358]" />
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

    <section class="section team">
        <div class="container">
            <div class="section__inner">
                <app-section-header class="tac">
                    <h2>Группы продаж</h2>
                </app-section-header>

                <div class="country__select">
                    <span>
                        Страна:
                        <app-drop-menu 
                            v-model="countryCurrent"
                            :menu="countries"
                            :style="'default'"
                            @update:modelValue="() => countryAreaCurrent = 0"
                        />
                    </span>

                    <span>
                        Менеджер по::
                        <app-drop-menu 
                            v-model="countryAreaCurrent"
                            :menu="countriesArea[countryCurrent]"
                            :style="'default'"
                        />
                    </span>
                    
                </div>

                <div class="slider__ofteam">
                    <app-slider>
                        <app-slide-item v-for="n in 10" :key="n">
                            {{ n }}
                        </app-slide-item>
                    </app-slider>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const countryCurrent = ref(0),
    countryAreaCurrent = ref(0);

const countries = [
    "Россия", "Казахстан", "Беларусь"
];
const countriesArea = [
    ["Москва и Московская область", "Санкт-Петербург", "Новосибирск"],
    ["Астана", "Караганда"],
    ["Минск", "	Бобруйск", "Борисов"]
]
</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.section.contacts {
    .features{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 30px;

        margin-bottom: 60px;
    }

    .office {

        display: grid;
        grid-template-columns: 490px 1fr;
        column-gap: 30px;

        img {
            width: 490px;
            height: 545px;
        }

        .map {
            width: 100%;
            height: 545px;
        }
    }
}

.section.team {
    .country__select{ 

        display: flex;
        align-items: center;
        margin: 55px 0 40px 0;

        span {
            margin-right: 100px;
            color: vars.$color-g-light;
            display: flex;
            align-items: center;
        }
    }

    .slider__ofteam {
        height: 255px;
        width: 100%;
    }
}
</style>

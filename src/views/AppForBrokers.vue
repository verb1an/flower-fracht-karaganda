<template>
    <app-page-header :title="'Брокерам'" :imgLink="'assets/img/ae4accf4d8dc0dc8210fa77134169b94.jpg'" />

    <section class="section for__brokers">
        <div class="container">
            <div class="section_inner">
                <app-title class="section__title_forbrokers">
                    <h4>Помогаем брокерам из любых стран с доставкой цветов по всему СНГ</h4>
                </app-title>

                <div class="content">
                    <div class="illustration">

                        <div class="img">
                            <img src="@/assets/icons/world-map.svg" alt="world map">
                        </div>
                        
                        <div class="way__items">
                            <span class="way__item"></span>
                            <span class="way__item"></span>
                            <span class="way__item"></span>
                        </div>
                        
                    </div>
                    <div class="features">
                        <app-features-item>
                            <template #title>
                                <app-title><h5>Телефон</h5></app-title>
                            </template>
                            <template #text>
                                <p>Клиент обращается/работает с брокером</p>
                            </template>
                            <template #step>01</template>
                        </app-features-item>
                        <app-features-item>
                            <template #title>
                                <app-title><h5>Телефон</h5></app-title>
                            </template>
                            <template #text>
                                <p>Клиент обращается/работает с брокером</p>
                            </template>
                            <template #step>02</template>
                        </app-features-item>
                        <app-features-item>
                            <template #title>
                                <app-title><h5>Телефон</h5></app-title>
                            </template>
                            <template #text>
                                <p>Клиент обращается/работает с брокером</p>
                            </template>
                            <template #step>03</template>
                        </app-features-item>
                        <app-features-item>
                            <template #title>
                                <app-title><h5>Телефон</h5></app-title>
                            </template>
                            <template #text>
                                <p>Клиент обращается/работает с брокером</p>
                            </template>
                            <template #step>04</template>
                        </app-features-item>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use "@/assets/scss/vars";
.section.for__brokers {
    .title.section__title_forbrokers {
        padding: 0 260px;
        color: vars.$color-g-white;
        text-align: center;
    }

    .content {
        padding: 55px 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }

    .illustration {
        position: relative;
        width: 416px;
        height: 416px;

        .img {
            position: relative;
            width: 416px;
            height: 416px;

            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 334px;
                height: 166px;
            }

            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 416px;
                height: 416px;
                border: 1px solid rgba(85, 122, 161, 0.3);
                border-radius: 50%;
            }
        }

        .way__items {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(24deg);
            width: 100%;
            height: 100%;

            .way__item {
                position: absolute;
                transform: translate(-50%, -50%);
                width: 76px;
                height: 76px;
                background-color: vars.$color-g-dopdark;
                border: 1px solid rgba(85, 122, 161, 0.30);
                border-radius: 50%;

                &:nth-child(1) {
                    top: 0;
                    left: 50%;
                }

                &:nth-child(2) {
                    top: 66%;
                    left: 3%;
                }

                &:nth-child(3) {
                    top: 66%;
                    left: 97%;
                }
            }
        }
        
    }

    .features {
        display: grid;
        grid-template-columns: repeat(2, 360px);
        grid-template-rows: repeat(2, 175px);
        gap: 30px;
    }
}
</style>
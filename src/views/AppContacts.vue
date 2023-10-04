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
</template>

<script setup>
</script>

<style lang="scss" scoped>
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
</style>

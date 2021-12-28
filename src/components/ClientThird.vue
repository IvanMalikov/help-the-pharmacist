<template>
    <div class="card">
        <img src="../assets/images/clients/3.png" alt="">
        <div class="info">
            <div class="name">
                Любов, 58 років
            </div>
            <div class="description">
                Лікар призначив препарат від артеріальної гіпертензії, а бренд
                дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .card {
        width: 540px;
        height: 590px;
        border-radius: 3em;
        margin: 0 auto;
        box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
        margin-top: 130px;
    }

    .info {
        margin: 15px 50px;
    }

    .name {
        color: #8E9AD5;
        font-weight: 600;
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 15px;
    }

    .description {
        font-size: 18px;
        line-height: 25px;
    }
</style>
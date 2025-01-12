<script setup>
import $fetch from "@/handler/api.js";
import {useRouter} from "vue-router";

async function submit(event)
{
    const formData = new FormData(event.value);

    const response = await $fetch('/auth/login', 'post', formData);

    if(response)
    {
        return router.push('/');
    }
}
</script>

<template>
    <form @submit.prevent="submit(event)" id="contact">
        <h3 class="title">Связаться с нами</h3>

        <label>
            Имя
            <input type="text" name="login"  placeholder="emil">
        </label>

        <label>
            Почта
            <input type="text" name="email" required placeholder="email@mail.ru">
        </label>

        <label>
            Сообщение
            <textarea type="text" name="message"  placeholder="Ну имбовый сайт жи ест ?"></textarea>
        </label>

        <button>
            Войти
        </button>
    </form>
</template>

<style>

</style>
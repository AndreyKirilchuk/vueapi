<script setup>
import $fetch from "@/handler/api.js";
import {useRouter} from "vue-router";

async function submit(event)
{
    const formData = new FormData(event.value);

    const response = await $fetch('/auth/register', 'post', formData);

    if (response) {
        return router.push('/auth/login');
    }
}
</script>

<template>
    <form @submit.prevent="submit(event)">
        <h3 class="title">Регистрация</h3>

        <label>
            Фамилия
            <input type="text" name="email" required placeholder="burganov">
        </label>

        <label>
            Имя
            <input type="text" name="login"  placeholder="emil">
        </label>

        <label>
            Почта
            <input type="text" name="email" required placeholder="email@mail.ru">
        </label>

        <label>
            Логин
            <input type="text" name="login"  placeholder="user">
        </label>

        <label>
            Пароль
            <input type="text" name="login"  placeholder="•••••">
        </label>

        <label>
            Подтвердите пароль
            <input type="text" name="login"  placeholder="•••••">
        </label>



        <button>
            Войти
        </button>

        <router-link to="/login" class="flex f-b">
            <span>
                Есть аккаунт ?
            </span>

            Войти
        </router-link>
    </form>
</template>

<style>

</style>
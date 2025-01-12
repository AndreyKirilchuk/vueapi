<script setup>
    import $fetch from "@/handler/api.js";
    import {useRouter} from "vue-router";

    async function submit(event)
    {
        const formData = new FormData(event.value);

        const response = await $fetch('/auth/login', 'post', formData);

        if(response)
        {
            localStorage.setItem('token', response.token || '');
            localStorage.setItem('admin', (!!response.admin).toString());
            return router.push('/');
        }
    }
</script>

<template>
    <form @submit.prevent="submit(event)">
        <h3 class="title">Авторизация</h3>

        <label>
            Почта
            <input type="text" name="email" required placeholder="email@mail.ru">
        </label>

        <label>
            Логин
            <input type="text" name="login"  placeholder="user">
        </label>

        <button>
            Войти
        </button>

        <router-link to="/register" class="flex f-b">
            <span>
                Нет аккаунта ?
            </span>

            Зарегестрироваться
        </router-link>
    </form>
</template>

<style>

</style>
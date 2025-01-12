<script setup>
    import { ref } from 'vue';
    let token = ref(localStorage.getItem('token') ?? false);
    let admin = ref(localStorage.getItem('admin') ?? false);
</script>

<template>
    <div class="header_container">
        <div class="container">
            <header>
                <router-link to="/">
                    <span class="logo">
                        Logo
                    </span>
                </router-link>


                <nav class="flex">
                    <router-link to="/#about">О проекте</router-link>
                    <router-link to="/#contact">Контакты</router-link>
                    <router-link v-if="!token" to="/login">Войти</router-link>
                    <router-link v-if="!token" to="/register">Регистрация</router-link>
                    <router-link v-if="token" to="/profile">Профиль</router-link>
                    <router-link v-if="admin" to="/admin">Админ панель</router-link>
                </nav>
            </header>
        </div>
    </div>
</template>

<style scoped>

</style>
<script setup>
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import {onBeforeMount} from "vue";



</script>

<template>

    <Header/>

    <div class="container">
        <RouterView />
    </div>

    <Footer/>

</template>

<style scoped>

</style>

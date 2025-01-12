<script setup>
    import $fetch from "@/handler/api.js";
    import { ref } from 'vue';

    const tasks = ref([]);
    const currentIndex = ref(0);

    tasks.value = await $fetch('/tasks', 'get');

    const nextTask = () => {
        if(currentIndex.value < tasks.value.length - 1)
        {
            currentIndex.value ++
        }else {
            currentIndex.value = 0;
        }
    }

    const backTask = () => {
        if (currentIndex.value >= 0) {
            currentIndex.value--;
        }else{
            currentIndex.value = 4;
        }
    }
</script>

<template>
    <div v-for="task in tasks" id="about">
        <div class="">
            <h2>{{task[currentIndex].name}}</h2>
            <h3>{{task[currentIndex].status}}</h3>
        </div>


    </div>
</template>

<style scoped>

</style>
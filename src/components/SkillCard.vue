<script setup>
    const props = defineProps(['logo', 'name', 'description', 'level'])
</script>

<template>
    <div class="card m-3">
        <div class="card-body">
            <h4 class="card-title fw-bold"><span><img :src="logo" alt="logo" width="50"></span>  {{ name }}</h4>
            <p class="card-text">{{ description }}</p>
            <i v-for="n in parseInt(level)" class="bi bi-star-fill"></i>
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        logo: Image,
        name: String,
        description: String,
        level: Number,
    })
</script>

<template>
    <div class="card m-3">
        <div class="card-body">
            <h4 class="card-title fw-bold"><span><img :src="logo" alt="logo" width="50"></span>  {{ props.name }}</h4>
            <p class="card-text">{{ props.description }}</p>
            <i v-for="n in parseInt(props.level)" class="bi bi-star-fill"></i>
        </div>
    </div>
</template>
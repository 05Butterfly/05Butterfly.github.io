<script setup>
    const props = defineProps(['image', 'title', 'tag', 'description', 'url'])
</script>

<template>
    <div class="card m-3 shadow-sm">
        <img :src="image" class="card-img-top" alt="project">
        <div class="card-body">
            <h4 class="card-title fw-bold">{{ title }}</h4>
            <h6 class="text-muted">{{ tag }}</h6>
            <p class="card-text">{{ description }}</p>
            <a :href="url" class="btn btn-outline-primary">{{ $t('card-button.text') }}</a>
        </div>
    </div>
</template>
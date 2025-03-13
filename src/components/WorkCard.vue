<script setup>
    const props = defineProps(['title', 'tag', 'description', 'url'])
</script>

<template>
    <div class="card m-3 shadow-sm">
    <div class="card-body">
        <h4 class="card-title fw-bold">{{ title }}</h4>
        <h6 class="text-muted">{{ tag }}</h6>
        <p class="card-text">{{ description }}</p>
        <a :href="url" class="btn btn-outline-primary">{{ $t('project-cards-button.text') }}</a>
    </div>
</div>
</template>
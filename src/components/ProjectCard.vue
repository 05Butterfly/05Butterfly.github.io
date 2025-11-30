<script setup>
    const { project } = defineProps(["project"])
</script>

<template>
    <div class="card m-3 shadow-sm">
        <img :src="project.image" class="card-img-top" alt="project">

        <div class="card-body">
            <h4 class="card-title fw-bold">{{ project.title }}</h4>
            <h6 class="text-muted">{{ project.tag }}</h6>
            <p class="card-text">{{ project.description }}</p>

            <div class="d-flex gap-2">
                <a :href="project.sourceUrl" class="btn btn-outline-primary">
                    {{ $t('card-button.sourceUrlText') }}
                </a>

                <a v-if="project.webUrl" :href="project.webUrl" class="btn btn-outline-dark">
                    {{ $t('card-button.webUrlText') }}
                </a>

                <a v-if="project.docUrl" :href="project.docUrl" class="btn btn-outline-success">
                    {{ $t('card-button.docUrlText') }}
                </a>
            </div>
        </div>
    </div>
</template>

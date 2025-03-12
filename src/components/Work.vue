<script setup>
    import { useI18n } from "vue-i18n";
    import ProjectCard from "./WorkCard.vue";

    const locale = useI18n();    
</script>

<template>
    <header class="bg-dark text-white p-3">
        <h1 class="mb-0">{{ $t('work.title') }}</h1>
    </header>

    <section>
        <div class="row row-cols-4 m-3">
            <div v-for="project in locale.getLocaleMessage(locale.locale.value)['project-cards']" class="col">
                <ProjectCard :title="project.title" :tag="project.tag" :description="project.description" :url="project.url"/>
            </div>
        </div>
    </section>
</template>

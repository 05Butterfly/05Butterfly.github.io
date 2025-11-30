<script setup>
    import { useI18n } from "vue-i18n";
    import ProjectCard from "./ProjectCard.vue";

    const locale = useI18n();    
</script>

<template>
    <header class="bg-dark text-white p-3">
        <h1 class="mb-0">{{ $t('project.title') }}</h1>
    </header>

    <section>
        <div class="row row-cols-3 m-3">
            <div v-for="project in locale.getLocaleMessage(locale.locale.value)['project-cards']" class="col">
                <ProjectCard :project="project"/>
            </div>
        </div>
    </section>
</template>
<script setup>
    import { useI18n } from "vue-i18n";
    import WorkCard from "./WorkCard.vue";

    const locale = useI18n();    
</script>

<template>
    <header class="bg-dark text-white p-3">
        <h1 class="mb-0">{{ $t('work.title') }}</h1>
    </header>

    <section>
        <div class="row row-cols-4 m-3">
            <div v-for="work in locale.getLocaleMessage(locale.locale.value)['work-cards']" class="col">
                <WorkCard :title="work.title" :tag="work.tag" :description="work.description" :url="work.url"/>
            </div>
        </div>
    </section>
</template>

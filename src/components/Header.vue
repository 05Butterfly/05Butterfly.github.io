<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const changeLanguage = (lang: string) => {
    locale.value = lang;
};
</script>

<template>
    <header class="d-flex justify-content-between align-items-center bg-dark text-white p-3">

        <div class="d-flex">
            <RouterLink class="btn btn-primary" to="/home">{{ $t('header.home') }}</RouterLink>
            <RouterLink class="btn btn-outline-primary mx-2" to="/projects">{{$t('header.projects')}}</RouterLink>
        </div>


        <h1 class="m-0">{{ $t('header.title') }}</h1>
        
            <div class="btn-group text-success" role="group">
                <button
                    type="button"
                    class="btn btn-outline-primary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <i class="bi bi-globe2"></i>
                </button>
                <ul class="dropdown-menu">
                    <li class="dropdown-item" @click="changeLanguage('en')">
                        🇬🇧 {{ $t('header.english') }}
                    </li>
                    <li class="dropdown-item" @click="changeLanguage('pl')">
                        🇵🇱 {{ $t('header.polish') }}
                    </li>
                    <li class="dropdown-item" @click="changeLanguage('es')">
                        🇪🇸 {{ $t('header.spanish') }}
                    </li>
                </ul>
            </div>
    </header>
</template>

<style scoped>
</style>

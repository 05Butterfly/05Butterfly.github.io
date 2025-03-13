<script setup>
  import { useI18n } from "vue-i18n";
  // Extraer locale y t desde useI18n
  const { locale, t } = useI18n(); // Esta t es la que usamos en el Template como $t
</script>

<template>
    <section class="container mt-5">
      <div class="row">
        <div class="col-md-4 text-center mb-4">
          <figure>
            <img src="../assets/imgs/book.jpg" class="img-fluid rounded-circle shadow" alt="A picture of my favorite hobby, reading." style="max-width: 250px;">
            <figcaption class="mt-2 text-muted">{{ $t("about.tag") }}</figcaption>
          </figure>
        </div>
  
        <div class="col-md-8 lead">
          <p>{{ $t("about.p1") }}</p>
          <p>{{ $t("about.p2") }}</p>
        </div>
      </div>
    </section>
  </template>
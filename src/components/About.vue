<template>
  <header>
    <div class="d-flex justify-content-between align-items-center bg-dark text-white p-3">
      <h1 class="m-0">{{ $t('header.title') }}</h1>
    </div>
  </header>
    
  <section class="container mt-5">
    <div class="row">
      <div class="col-md-4 text-center mb-4 ">
        <figure>
          <img src="/imgs/hero.png" class="img-fluid rounded-circle shadow" alt="A picture of my favorite hobby, reading." style="max-width: 250px;">
          <figcaption class="mt-2 text-muted">{{ $t("about.tag") }}</figcaption>
        </figure>
      </div>
    
      <div class="col-md-8 lead">
        <p>{{ $t("about.p1") }}</p>
        <p>{{ $t("about.p2") }}</p>
        <p>{{ $t("about.p3") }}</p>
      </div>
    </div>
  </section>
</template>
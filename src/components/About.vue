<template>
    <header>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" src="../assets/imgs/slides/" alt="First slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="..." alt="Second slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="..." alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </header>
    <section class="container mt-5">
        <div class="row">
            <div class="col-md-4 text-center my-4 ">
                <figure>
                  <img src="../assets/imgs/book.jpg" class="img-fluid rounded-circle shadow" alt="A picture of my favorite hobby, reading." style="max-width: 250px;">
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
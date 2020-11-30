<template>
  <li>
    <div class="card">
      <img class="card-img" :src="proimage" alt="نان مغزدار شکلاتی (کروسان)" />
      <h3 class="card-title">{{ proname }}</h3>
      <div class="card-description">
        <h4>{{ prodesc }}</h4>
      </div>
      <div class="price-offer">
        <span class="discount">{{ discount }}</span>
        <span class="price-before" style="margin-left: 6px"
          ><del>{{ pricebefore }}</del></span
        >
      </div>

      <div class="container-flex-4">
        <div>
          <img
            @click="$emit('threedotsclick')"
            src="../assets/show-more-button-with-three-dots.svg"
            style="width: 20px; height: auto; cursor: pointer"
          />
        </div>

        <div class="actual-price">
          <span class="price-after">{{ priceafter }}</span>
          <span><img src="../assets/toman.svg"/></span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  emits: ["3dotsclick"],
  props: [
    "proimage",
    "proname",
    "prodesc",
    "pricebefore",
    "discount",
    "priceafter",
  ],
};
</script>

<style>
.actual-price {
  margin: 0px 5px 0px 5px;
}

.container-flex-4 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  padding: 3px 10px 0px 10px;
}

@media screen and (min-width: 600px) {
  .discount {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    color: white;
    background-color: #cf0463;
    border-radius: 25px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .price-before {
    color: #524d4d;
    font-size: 13px;
  }

  .card-description {
    color: #524d4d;
  }

  .price-offer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    margin: 0px 10px 0px 10px;
  }

  .card {
    background-color: white;
    border-radius: 30px;
    width: 200px;
    height: auto;
    border-radius: 24px;
    margin: 30px;
    margin: 10px;
  }

  .card-title {
    font-size: 15px;
    margin: 0px 10px 0px 10px;
  }

  .card-description {
    font-size: 10px;
    margin: 0px 10px 0px 10px;
  }

  #discount {
    font-family: Estedad;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    background-color: white;
    border-radius: 30px;
    padding: 5px 15px 5px 15px;
  }

  .card-img {
    width: 200px;
    border: 10px white;
    height: auto;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  }
}
@media screen and (max-width: 600px) {
  .discount {
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    color: white;
    background-color: #cf0463;
    border-radius: 25px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .price-before {
    color: #524d4d;
    font-size: 13px;
  }

  .card-description {
    color: #524d4d;
    margin: 3px 3px 10px;
  }

  .price-offer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    margin: 0px 10px 0px 10px;
  }

  .card {
    background-color: white;
    border-radius: 30px;
    width: 200px;
    height: auto;
    border-radius: 24px;
    margin: 30px;
    margin: 10px;
  }

  .card-title {
    font-size: 15px;
    margin: 0px 10px 0px 10px;
  }

  .card-description {
    font-size: 10px;
    margin: 0px 10px 0px 10px;
  }

  #discount {
    font-family: Estedad;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    background-color: white;
    border-radius: 30px;
    padding: 5px 15px 5px 15px;
  }

  .card-img {
    width: 200px;
    border: 10px white;
    height: auto;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
  }
}
</style>

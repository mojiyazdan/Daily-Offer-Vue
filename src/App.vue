<template>
  <div class="main-container">
    <div id="container" class="container">
      <div style="width: 100%">
        <div class="container-flex">
          <div class="container-flex-1">
            <div>
              <h1 style="color: white">
                یک تخفیف هیجان انگیز! + ارسال رایگان
              </h1>
            </div>
            <div><p style="color: white">تا سقف 50 هزار تومان</p></div>
          </div>
          <div class="container-flex-5">
            <div class="container-flex-2 time-container eng-font">
              <p id="discount">
                کد تخفیف:
                <span id="discount-code" style="color: rgb(52, 52, 255)"
                  >dailyoff14</span
                ><span
                  ><img
                    @click="clickfunc()"
                    style="cursor: pointer"
                    src="./assets/copy.svg"
                /></span>
              </p>
              <offer-timer></offer-timer>
            </div>
            <div style="display: flex;flex-direction:row-reverse;">
              <p style="cursor: pointer" onclick="func()">مشاهده همه</p>
            </div>
          </div>
        </div>
        <div class="container-1">
          <div class="card-container">
            <ul>
              <product-card
                v-for="product in Products"
                :key="product.name"
                :proname="product.name"
                :proimage="product.image"
                :prodesc="product.prodesc"
                :pricebefore="product.pricebefore"
                :discount="product.discount"
                :priceafter="product.priceafter"
                @threedotsclick="threedotsclicked(product.name)"
              ></product-card>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OfferTimer from "./components/OfferTimer.vue";
import ProductCard from "./components/ProductCard";
export default {
  components: {
    ProductCard,
    OfferTimer,
  },
  computed: {
    Products() {
      return this.$store.state.Products;
    },
  },
  methods: {
    // all these lines are only for copy to clipboard!!!!
    clickfunc() {
      var input = document.createElement("input");
      input.value = document.getElementById("discount-code").innerHTML;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    },
    threedotsclicked(proname) {
      alert("you clicked on product : " + proname);
    },
  },
};
</script>
<style lang="scss">
.eng-font {
  font-family: Estedad;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: row;
}
@import url("./assets/styles(widescreen).scss");
@import url("./assets/styles(smallscreen).scss");
</style>

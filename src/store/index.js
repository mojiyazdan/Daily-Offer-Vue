import Vue from "vue";
import Vuex from "vuex";
import product1 from "../assets/images/product-1.jpg";
import product2 from "../assets/images/product-2.jpg";
import product3 from "../assets/images/product-3.jpg";
import product4 from "../assets/images/product-4.jpg";
import product5 from "../assets/images/product-5.jpg";
import product6 from "../assets/images/product-6.jpg";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      Products: [
        {
          name: "نان مغزدار شکلاتی (کروسان)",
          description: "غرفه : خانه کیک آیناز",
          pricebefore: "48,000",
          discount: "20%",
          priceafter: "36,000",
          image: product1
        },
        {
          name: "باقلوا اعلا و درجه 1 یزدی",
          description: "غرفه : شیرینی حاج شهرام یزد",
          pricebefore: "54,000",
          discount: "27%",
          priceafter: "39,500",
          image: product2
        },
        {
          name: "توت خشک و ارگانیک و محلی ..",
          description: "غرفه : ادویه و خشکبار نازگل",
          pricebefore: "58,000",
          discount: "16%",
          priceafter: "48,500",
          image: product3
        },
        {
          name: "رومیزی ترمه بختیاری",
          description: "غرفه : ترمه النا یزد",
          pricebefore: "70,000",
          discount: "34%",
          priceafter: "46,000",
          image: product4
        },
        {
          name: "زیتون درجه 1 فدک",
          description: "غرفه : مزرعه زیتون فدک",
          pricebefore: "18,000",
          discount: "6%",
          priceafter: "17,000",
          image: product5
        },
        {
          name: "زعفران نگین یک مثقالی",
          description: "غرفه : محصولات روستایی سبزرود",
          pricebefore: "65,000",
          discount: "34%",
          priceafter: "43,000",
          image: product6
        }
      ]
    };
  },
  mutations: {},
  actions: {},
  modules: {}
});

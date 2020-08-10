<template>
  <div class="product">
    <div class="img-wrap">
      <img src="https://via.placeholder.com/600x600" alt="Product image">
    </div>
    <div class="price">{{ currency }} {{ product.price.current.value }}</div>
    <div class="name">{{ product.name }}</div>
    <div class="color-carousel">
      <carousel
        :scrollPerPage="false"
        perPage="3"
        navigationEnabled
        :paginationEnabled="false"
      >
        <slide v-for="item in 6" :key="item" class="slide">
          <img src="https://via.placeholder.com/80x50" alt="carousel image">
          <div class="slide-number">{{ item }}</div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
const CURRENCY = {usd: 'USD'}

export default {
  name: 'Product',
  props: ['product'],
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      loading: false
    }
  },
  computed:{
    currency() {
      /** Switch-case if more than one */
      return this.product.price.currency === CURRENCY.usd ? '$' : ''
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables';

.product {
  width: 20%;
  padding: 0 5px;
  margin-bottom: 15px;

  @include desktop {
    width: 25%;
  }
  @include tablet {
    width: 33.3%;
  }
  @include mobile-wide {
    width: 50%;
  }
  @include mobile {
    width: 100%;
  }
  .img-wrap {
    margin-bottom: 5px;

    img {
      width: 100%;
    }
  }
  .price, .name {
    text-align: center;
    font-weight: 600;
    margin-bottom: 5px;
  }
}
.color-carousel {
  width: 70%;
  margin: 0 auto;

  .slide {
    padding: 0 5px;
    text-align: center;
    position: relative;

    .slide-number {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: 600;
    }
  }
}
</style>

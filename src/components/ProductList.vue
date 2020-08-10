<template>
  <div class="product-list">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else class="product-container">
      <product
        v-for="product in filteredProducts"
        :key="product.name"
        :product="product"
      >
      </product>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Product from './Product'

export default {
  name: 'ProductList',
  components: {Product},
  data() {
    return {
      loading: false
    }
  },
  computed:{
    ...mapGetters([
      'products',
      'searchField'
    ]),

    filteredProducts() {
      return this.products.filter(product => {
        return product.name.toLowerCase().match(this.searchField)
      })
    }
  },
  async created() {
    this.loading = true
    await this.getProducts()
    this.loading = false
  },
  methods: {
    ...mapActions([
      'getProducts'
    ]),
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables';

.product-list {
  padding: 15px 15px 0px 15px;
  flex-grow: 1;
}
.product-container {
  margin: 0 -5px;
  display: flex;
  flex-wrap: wrap;
}
</style>

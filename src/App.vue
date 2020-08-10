<template>
  <div id="app">
    <Header></Header>
    <ProductList></ProductList>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import ProductList from './components/ProductList'

export default {
  name: 'App',
  components: {
    Header,
    ProductList,
    Footer
  }
}
</script>

<style lang="scss" scoped>
#app {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>

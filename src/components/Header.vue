<template>
  <header>
    <div class="logo">
      <img src="https://via.placeholder.com/100x50" alt="">
    </div>

    <nav>
      <ul>
        <li class="active"><a href="/">Sunglasses</a></li>
        <li><a href="/">Eyeglasses</a></li>
        <li><a href="/">Lenses</a></li>
      </ul>
    </nav>

    <search/>
  </header>
</template>

<script>
import Search from './Search'

export default {
  name: 'Header',
  components: { Search }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables';

header {
  height: 50px;
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  background: $color-white;
  justify-content: space-between;
  padding: 0 15px;
  border-bottom: 2px solid $border-color;

  .logo {

    img {
      display: block;
      height: 100%;
    }
  }
  nav {
    @include mobile-wide {
      display: none;
    }
  }
  ul {
    padding: 0;
    margin: 0;
    height: 100%;
    display: flex;
    list-style-type: none;
    text-transform: uppercase;
    font-weight: 600;

    li {
      margin: 0 15px;
      height: 100%;
      line-height: 50px;

      a {
        color: $color-black;
        text-decoration: none;
        display: block;
        height: 100%;
        border-bottom: 3px solid transparent;
      }
      &:hover a{
        border-bottom-color: $border-color;
      }
      &.active a{
        border-bottom-color: $color-black;
      }
    }
  }
}
</style>

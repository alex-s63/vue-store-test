<template>
  <div class="search">
    <input @input="searchOnChange" :value="searchField" placeholder="search" type="text">
    <button @click="resetSearch">Reset</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Search',
  computed: {
    ...mapGetters([
      'searchField'
    ])
  },
  methods: {
    ...mapActions([
      'updateSearchField'
    ]),
    searchOnChange(e) {
      this.updateSearchField(e.target.value)
    },
    resetSearch() {
      this.updateSearchField('')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables';

.search {
  display: flex;
  align-items: center;

  @include mobile-wide {
    display: none;
  }
  input {
    border-style: solid;
    border-color: $border-color;
    border-radius: 3px;
    padding: 6px 10px;
    margin-right: 10px;
  }
  button {
    background: $color-black;
    color: $color-white;
    border: none;
    border-radius: 3px;
    height: 32px;
    padding: 0 10px;
    text-transform: uppercase;
    font-size: 10px;
    cursor: pointer;
  }
}
</style>

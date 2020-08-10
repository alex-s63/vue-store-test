<template>
  <footer>
    <div class="subscribe">
      <span>Subscribe to our newsletter</span>
      <div class="subscribe-field">
        <input v-model="email" type="text" :class="{'error': validationError}">
        <button @click="subscribe">Subscribe</button>
      </div>
    </div>

    <div class="social">
      <a href="/">Twitter</a>
      <a href="/">Facebook</a>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'Footer',
  data() {
    return {
      email: '',
      validationError: false
    }
  },
  methods: {
    emailValidation() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(this.email);
    },
    subscribe() {
      this.validationError = false
      this.emailValidation() ? alert('Success') : this.validationError = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/variables';

footer {
  background: $color-black;
  color: $color-white;
  padding: 15px;

  .subscribe {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    @include mobile {
      display: block;
    }
  }
  .subscribe-field {

    input {
      padding: 5px;
      margin-right: 5px;
      height: 30px;
      border: none;
      border-radius: 3px;

      &.error {
        border: 2px solid red;
      }
    }
    button {
      padding: 5px;
      background: $color-white;
      border: none;
      height: 30px;
      border-radius: 3px;
      cursor: pointer;
    }
  }
  .social {
    display: flex;
    justify-content: flex-end;

    a {
      color: $color-white;

      &:not(:last-of-type) {
        margin-right: 10px;
      }
    }
  }
}
</style>

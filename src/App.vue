<template>
  <div class="container">
    <h1 class="title">Vue Invoice calc</h1>
    <form-add />

    <product-list />

    <div class="footer-section">
      <button
          class="footer-section__delete btn"
          type="button"
          :disabled="$store.getters.selectedProducts.length === 0"
          @click="deleteProducts"
      >Delete</button>

      <div class="footer-section__text">
        <span>Total:</span>
        <span>${{ $store.getters.sum }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import FormAdd from '@/components/FormAdd'
import ProductList from '@/components/product/ProductList'

export default {
  name: 'App',
  components: {
    ProductList,
    FormAdd,
  },
  created() {
    this.$store.dispatch('loadProducts')
  },
  methods: {
    deleteProducts() {
      this.$store.commit('deleteProducts')
    }
  }
}
</script>

<style lang="scss">
.container {
  width: 700px;
  margin: auto;
  padding-top: 50px;
}
.title {
  margin-bottom: 30px;
}
.footer-section {
  display: flex;
  justify-content: space-between;
  &__text > span {
    display: inline-block;
    width: 137px;
    padding-left: 8px;
  }
}
.btn {
  padding: 4px 15px;
  cursor: pointer;
  &[disabled] {
    cursor: not-allowed;
  }
}
</style>

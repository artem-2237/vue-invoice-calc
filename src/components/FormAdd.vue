<template>
  <form
      class="form-add"
      @submit.prevent="addProduct({name, price, quantity})"
  >

    <div class="input-group">
      <input
          type="text"
          ref="inputName"
          class="input form-add__input input__primary"
          placeholder="Product name"
          v-model="name"
      >
      <input
          type="number"
          ref="inputPrice"
          class="input form-add__input input__secondary"
          placeholder="Price"
          v-model="price"
      >
      <input
          type="number"
          ref="inputQty"
          class="input form-add__input input__secondary"
          placeholder="Qty"
          v-model="quantity"
      >
    </div>

    <button class="form-add__submit-btn btn">Add</button>
  </form>
</template>

<script>
export default {
  name: 'FormAdd',
  data() {
    return {
      name: '',
      price: '',
      quantity: ''
    }
  },
  methods: {
    addProduct(product) {
      this.$store.commit('addProduct', product)
      this.name = ''
      this.price = ''
      this.quantity = ''
      for (let input in this.$refs) {
        this.$refs[input].blur()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form-add {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 15px;
}
.input {
  margin-right: 20px;
  padding: 4px;
  &-group {
    display: flex;
  }
  &__primary {
    width: 400px;
  }
  &__secondary {
    width: 80px;
  }
}
.submit-btn {
  padding: 4px 15px;
}
</style>
<template>
  <tr>
    <td><slot name="checkbox" /></td>
    <td>{{ product.name }}</td>
    <td>${{ product.price }}</td>
    <td>{{ product.quantity }}</td>
    <td>{{ product.price * product.quantity }}</td>
  </tr>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      require: true,
      validator(val) {
        return ['id', 'name', 'price', 'quantity'].every((el, i) => el === Object.keys(val)[i])
      }
    }
  },
  methods: {
    select(e) {
      if (e.target.checked === true) {
        this.$store.commit('selectProduct', this.product.id)
      } else {
        this.$store.commit('unselectProduct', this.product.id)
      }
    }
  }
}
</script>

<style scoped>

</style>
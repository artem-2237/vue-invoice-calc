<template>
  <div class="product-list">
    <div class="product-list__table-header">
      <table>
        <thead>
        <tr>
          <th><input type="checkbox" v-model="selectAll"></th>
          <th>Product name</th>
          <th>Price</th>
          <th>Qty</th>
          <th>Sum</th>
        </tr>
        </thead>
      </table>
    </div>
    <div
        class="product-list__table-body"
        :style="{marginRight: isScrollable ? '-6px' : '0'}"
    >
      <table>
        <tbody>
        <product-item
            v-for="product in $store.getters.products"
            :key="product.name"
            :product="product"
            v-model="selected"
        >
          <template #checkbox>
            <input
                type="checkbox"
                name="product"
                :value="product.id"
                v-model="selected"
            >
          </template>
        </product-item>
        <tr
            v-for="item in emptyCell"
            :key="item"
            height="26px"
        >
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/product/ProductItem'
export default {
  name: 'ProductList',
  components: {ProductItem},
  data() {
    return {
      selected: [],
    }
  },
  computed: {
    selectAll: {
      get() {
        return this.$store.getters.products.length === this.$store.getters.selectedProducts.length
            && this.$store.getters.products.length > 0
      },
      set(val) {
        this.$store.commit('selectAll', val)
      }
    },
    emptyCell() {
      const n = 8 - this.$store.getters.products.length
      return n > 0 ? n : 0
    },
    isScrollable() {
      return (8 - this.$store.getters.products.length) < 0
    }
  },
  watch: {
    selected(val) {
      this.$store.commit('setSelectedProducts', val)
    },
    selectAll(val) {
      this.selected = this.$store.getters.selectedProducts
    }
  },
}
</script>

<style lang="scss">
.product-list {
  margin-bottom: 15px;
  &__table-body {
    overflow-y: auto;
    height: 226px;
  }
  & table {
    table-layout: fixed;
    width: 100%;
    text-align: left;
    & td, th {
      padding: 4px 10px;
    }
    & th {
      background: #b9b9b9;
    }
    & tr:nth-child(odd) {
      background: #dadada;
    }
    & tr:nth-child(even) {
      background: #f6f6f6;
    }
  }
}
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
</style>
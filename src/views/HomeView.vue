<template>
  <div class="home mt-2">
    <ProductDescriptionDrawer
      :product="product"
      :active="active.product_drawer"
      v-on:close-product-drawer="closeProductDrawer()"
    />

    <div class="row">
      <div
        v-for="product in items"
        :key="product.id"
        class="col-lg-3 col-md-4 col-sm-6"
      >
        <div class="product-card-container">
          <ProductSummeryCard
            :product="product"
            v-on:view-product="viewProduct($event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import items from "../data/item.js";
import ProductSummeryCard from "../components/products/ProductSummeryCard.vue";
import ProductDescriptionDrawer from "../components/products/ProductDescriptionDrawer.vue";

export default {
  name: "HomeView",
  components: {
    ProductSummeryCard,
    ProductDescriptionDrawer,
  },
  data() {
    return {
      items: items,
      product: null,
      active: {
        product_drawer: false,
      },
    };
  },
  methods: {
    viewProduct(product) {
      this.product = product;
      this.active.product_drawer = true;
      console.log(this.product);
    },
    closeProductDrawer(){
      this.active.product_drawer = false;
    }
  },
};
</script>

<style lang="scss">
.product-card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
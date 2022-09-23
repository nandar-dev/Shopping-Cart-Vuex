<template>
  <div>
    <h1>Your Cart</h1>

    <div class="row">
      <div
        v-for="product in items"
        :key="product.id"
        class="col-lg-3 col-md-4 col-sm-6"
      >
        <div class="product-card-container">
          <CardItemCart :key="product.id" :product="product" />
        </div>
      </div>
    </div>
    <CartSummaryPaymentCard/>
  </div>
</template>

<script>
import CardItemCart from "../components/cart/CartItemCard.vue";
import CartSummaryPaymentCard from "../components/cart/CartSummaryPaymentCard.vue";

export default {
  name: "CartView",
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
  },
  components: {
    CardItemCart,
    CartSummaryPaymentCard
  },
};
</script>

<style>
</style>
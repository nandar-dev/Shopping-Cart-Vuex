<template>
  <!-- <div class="cart-item-card">
    <div class="header">
      <h3>{{ product.title }}</h3>
      <h4>In Cart: {{ product.quantity }}</h4>
      <h4>Total Cost: {{ item_cost.toFixed(2) }}</h4>
    </div>
    <p>{{description}}</p>
  </div> -->
  <div class="card">
    <img class="product-image" :src="product.images" alt="Product Image" />
    <h3 class="title mt-2">{{ product.title }}</h3>
    <h4>In Cart: {{ product.quantity }}</h4>
    <h4>Total Cost: {{ item_cost.toFixed(2) }}</h4>
  </div>
</template>

<script>
export default {
  name: "CartItemCard",
  props: ["product"],
  computed: {
    description() {
      return this.product.description.substring(0, 120);
    },
    item_cost() {
      return this.product.price * this.product.quantity;
    },
  },
};
</script>


<style lang="scss">
.card {
  width: 65%;
  background: #fff;
  padding: 20px;
  margin: 10px;
  border: none;
  border-radius: 0;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);

  .description {
    color: rgb(172, 172, 172);
  }

  h3.title {
    font-weight: 600;
  }

  h5.price {
    color: cornflowerblue;
    font-size: 19px;
  }

  img.product-image {
    height: 250px;
    object-fit: cover;
  }

  .view-product-button {
    border: none;
    height: 40px;
    font-size: 15px;
    background: #b3d9f9;
    color: white;
  }
}
</style>
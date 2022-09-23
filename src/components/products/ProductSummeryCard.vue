<template>
  <div class="card">
    <img class="product-image" :src="product.images" alt="Product Image" />
    <h3 class="title mt-2">{{ product.title }}</h3>
    <p class="description">Descripteion {{ description }}</p>
    <h5 class="price">${{ product.price.toFixed(2) }}</h5>
    <vue3-star-ratings
      starSize="20"
      :animate="true"
      :showControl="false"
      v-model="rating"
    />
    <button class="view-product-button" @click="$emit('view-product', product)">
      View Product
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["product"],
  data() {
    return {
      rating: this.product.rating,
    };
  },

  computed: {
    description() {
      return this.product.description.substring(0, 150);
    },
  },
});
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

  .vue3-star-ratings__wrapper {
    margin: 0 !important;
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
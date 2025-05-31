
<template>
  <div v-if="product">
    <h2>{{ product.title }}</h2>
    <img :src="product.image" alt="Product Image" width="200" />
    <p><strong>Precio:</strong> {{ product.price }}</p>
    <p><strong>Categoría:</strong> {{ product.category }}</p>
    <p><strong>Descripción:</strong> {{ product.description }}</p>
  </div>
</template>

<script>
import { getPost } from '../services/postService';

export default {
  data() {
    return {
      product: null
    };
  },
  mounted() {
    const id = this.$route.params.id;
    getPost(id).then(data => {
      this.product = data;
    });
  }
};
</script>

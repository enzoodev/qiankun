<template>
  <div class="about-content">
    <h1>This is about page</h1>
    <h2>{{ metaTitle }}</h2>
    <p>{{ metaSubtitle }}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  name: 'About',
  setup() {
    // Obter a rota atual
    const route = useRoute();

    // Retornar os dados do meta
    return {
      metaTitle: route.meta.title,
      metaSubtitle: route.meta.subtitle,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-content {
  color: #7265e6;
}
</style>

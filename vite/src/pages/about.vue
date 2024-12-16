<template>
  <div class="about-content">
    <h1>This is about page</h1>
    <h2>{{ title }}</h2>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const { title, subtitle } = route.meta;
</script>

<style scoped>
.about-content {
  color: #7265e6;
}
</style>

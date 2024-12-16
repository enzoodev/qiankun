<template>
  <h3>About</h3>
  <div class="about-content">
    <h2>{{ title }}</h2>
    <p>{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const { title, subtitle } = route.meta;
</script>

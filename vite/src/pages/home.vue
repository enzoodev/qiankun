<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ExportReport from '../components/export-report.vue';

const isOpenExportReport = ref(false);
const router = useRouter();

const goToAbout = () => {
  router.push({ name: 'about' });
};

const handleCloseExportReportModal = () => {
  isOpenExportReport.value = false;
};
</script>

<template>
  <h3>Home</h3>
  <img alt="Vue logo" src="../assets/logo.png" />
  <router-link to="about">About</router-link>
  <q-btn @click="goToAbout" label="Go to About using router.push()" class="q-ml-md" />
                <q-icon
                  name="fa fa-file-excel" 
                  size="sm" 
                  class="cursor-pointer q-mr-md"
                  color="primary"
                  @click="() => isOpenExportReport = true"
                />
  <export-report
    :isOpenRef="isOpenExportReport"
    :isPendingExport="false"
    :hasFilters="true"
    :onClose="handleCloseExportReportModal"
    :onConfirm="() => {}"
  />
</template>

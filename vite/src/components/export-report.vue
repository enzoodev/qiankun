<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { i18n } from '../lib/plugins/i18n';

type Props = {
  isOpenRef: boolean;
  isPendingExport: boolean;
  isOtherSituations?: boolean;
  hasFilters?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const {
  isOpenRef,
  hasFilters = false,
  isOtherSituations = false,
  isPendingExport,
  onClose,
  onConfirm,
} = defineProps<Props>();

const { t } = i18n.global;
const isOpen = computed(() => isOpenRef);
const format = isOtherSituations ? 'INVENTARIO_OUTRAS_SITUACOES' : 'INVENTARIO (ANO)';
</script>

<template>
  <q-dialog v-model="isOpen">
    <q-card>
      <q-card-section>
        <div class="text-h6">
          {{ t('exportReport') }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ hasFilters ?
          t('exportReportWithFilterMessage', { format })
          : t('exportReportWithoutFilterMessage', { format }) }}
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ hasFilters ? t('exportReportWithFilterFooterMessage') : t('exportReportWithoutFilterFooterMessage') }}
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          color="grey-8"
          class="q-mr-sm"
          @click="onClose"
          :label="t('cancel')"
        />
        <q-btn
          color="primary"
          class="q-mr-sm"
          :loading="isPendingExport"
          @click="onConfirm"
          :label="t('confirm')"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

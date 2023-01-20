<template>
  <q-card>
    <q-card-section class="row items-center q-pb-none">
      <div class="text-h6">Detalle de la Cuenta Seleccionada</div>
      <q-space />
      <q-btn icon="close" flat round dense v-close-popup />
    </q-card-section>

    <q-card-section class="scroll">
      <q-list v-for="(value, name) in store.details[0]" :key="name">
        <q-item>
          <q-item-section>
            <q-item-label>{{ name }}</q-item-label>
            <q-item-label caption>{{ value }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator spaced inset />
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
import { userStore } from "src/stores/activeDirectory/userTable";
export default {
  setup() {
    const store = userStore();
    return {
      store,
    };
  },
};
</script>

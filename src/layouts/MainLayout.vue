<template>
  <div class="q-pa-md">
    <q-layout
      view="hHh Lpr lff"
      style="min-height: 00vh"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated class="bg-purple-8">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Inventario</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="250"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>
            <q-item clickable v-ripple active-class="my-menu-link" to="/" exact>
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>

              <q-item-section> Dashboard </q-item-section>
            </q-item>

            <q-expansion-item
              expand-separator
              icon="admin_panel_settings"
              label="Directorio Activo"
            >
              <q-expansion-item
                :header-inset-level="0.2"
                expand-separator
                icon="table_view"
                label="Tabla de Registro"
                clickable
                to="/tactive"
                active-class="my-menu-link"
                v-ripple
              ></q-expansion-item>
              <q-expansion-item
                :header-inset-level="0.2"
                expand-separator
                icon="person_add"
                label="Crear de Registro"
                clickable
                active-class="my-menu-link"
                v-ripple
              ></q-expansion-item>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="account_balance"
              label="Bantotal"
            >
              <q-expansion-item
                :header-inset-level="0.2"
                expand-separator
                icon="table_view"
                label="Tabla de Registro"
                clickable
                active-class="my-menu-link"
                v-ripple
              ></q-expansion-item>
              <q-expansion-item
                :header-inset-level="0.2"
                expand-separator
                icon="person_add"
                label="Crear de Registro"
                clickable
                active-class="my-menu-link"
                v-ripple
              ></q-expansion-item>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="call_to_action"
              label="SBS"
            >
              <q-expansion-item
                :header-inset-level="0.2"
                expand-separator
                icon="table_view"
                label="Tabla de Registro"
                clickable
                active-class="my-menu-link"
                v-ripple
              ></q-expansion-item>
              <q-expansion-item
                :header-inset-level="0.2"
                expand-separator
                icon="person_add"
                label="Crear de Registro"
                clickable
                active-class="my-menu-link"
                v-ripple
              ></q-expansion-item>
            </q-expansion-item>

            <q-separator />

            <q-item clickable v-ripple active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section> SALIR </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      drawer: ref(false),
      miniState: ref(true),
      link: ref("inbox"),
    };
  },
};
</script>

<style>
.my-menu-link {
  color: white;
  background: #791e71;
}
</style>

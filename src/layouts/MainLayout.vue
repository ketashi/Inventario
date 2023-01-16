<template>
  <div class="q-pa-md">
    <q-layout
      view="hHh Lpr lff"
      style="min-height: 00vh"
      class="shadow-2 rounded-borders"
    >
      <q-header elevated class="primary">
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
        :width="200"
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

            <q-item clickable v-ripple active-class="my-menu-link" to="/user">
              <q-item-section avatar>
                <q-icon name="face" />
              </q-item-section>

              <q-item-section> User </q-item-section>
            </q-item>

            <q-item clickable v-ripple active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section> Send </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section> Drafts </q-item-section>
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
  background: #f2c037;
}
</style>

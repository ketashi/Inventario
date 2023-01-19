<template>
  <div class="q-pa-md">
    <q-table
      title="Usuarios"
      :rows="store.rows"
      :columns="store.columns"
      row-key="name"
      :filter="filter"
      no-data-label="No hay etiquetas para mostrar"
      no-results-label="No se encontrado el resultado"
      v-model:pagination="pagination"
      hide-pagination
      class="my-sticky-column-table"
    >
      <!-- header -->
      <template v-slot:top="props">
        <div class="col-4 q-table__title">Inventario del Active Directory</div>
        <q-space />
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Buscar"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-btn
          flat
          round
          dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />
      </template>
      <!-- body -->
      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <div class="q-pa-md q-gutter-sm">
            <q-btn round class="bg-blue text-white" icon="preview" size="sm" />
            <q-btn round class="bg-purple text-white" icon="edit" size="sm" />
            <q-btn
              round
              class="bg-red text-white"
              icon="delete"
              size="sm"
              @click="notifDelete(props.row)"
            />
          </div>
        </q-td>
      </template>
      <!-- no found-->
      <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span> Lo siento... {{ message }} </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
      </template>
    </q-table>
    <!-- pagination -->
    <div class="row justify-center q-mt-md">
      <q-pagination
        v-model="pagination.page"
        color="purple"
        :max="pagesNumber"
        :max-pages="6"
        boundary-numbers
        direction-links
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { userStore } from "src/stores/activeDirectory/userTable";
import { useQuasar } from "quasar";

export default {
  setup() {
    //state
    const $q = useQuasar();
    const store = userStore();
    const pagination = ref({
      sortBy: "desc",
      descending: false,
      page: 2,
      rowsPerPage: 5,
    });
    //methods
    function notifDelete(props) {
      $q.notify({
        message: "¿Desea Eliminar el Registro Permanente de la Base de Datos?.",
        color: "red",
        icon: "delete",
        position: "top",
        actions: [
          {
            label: "Aceptar",
            color: "blue-10",
            handler: () => {
              store.increment(props.name);
              $q.notify({
                message: "Se elimino el registro seleccionado.",
                color: "primary",
                position: "top",
                icon: "person_remove",
              });
            },
          },
          {
            label: "Cancelar",
            color: "white",
            handler: () => {
              /* ... */
            },
          },
        ],
      });
    }
    //computed
    const pagesNumber = computed(() =>
      Math.ceil(store.rows.length / pagination.value.rowsPerPage)
    );
    //call getters
    store.getData;
    //call actions
    //return
    return {
      filter: ref(""),
      pagination,
      pagesNumber,
      store,
      notifDelete,
    };
  },
};
</script>
<style>
.my-sticky-column-table thead tr:first-child th:first-child {
  background-color: #fff;
}
.my-sticky-column-table td:first-child,
.my-sticky-column-table th:first-child {
  background-color: #791e71 !important;
  color: #fff;
}
.my-sticky-column-table th:first-child,
.my-sticky-column-table td:first-child {
  position: sticky !important;
  left: 0;
  z-index: 3;
  background-color: #fff;
}
</style>

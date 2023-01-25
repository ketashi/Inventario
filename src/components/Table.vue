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
      :visible-columns="visibleColumns"
    >
      <!-- header -->
      <template v-slot:top="props">
        <div class="row justify-center">
          <div class="col-md-6 col-sm-12 q-table__title">
            <q-icon name="table_view"></q-icon>
            <label for="table_view"> Inventario del Active Directory </label>
          </div>
          <div class="col-md-6 col-sm-12 align-center">
            <q-select
              v-model="visibleColumns"
              multiple
              outlined
              dense
              options-dense
              emit-value
              map-options
              :options="store.columns"
              option-value="name"
              options-cover
              label="Filtro de Columnas"
              stack-label
              transition-show="flip-up"
              transition-hide="flip-down"
              behavior="dialog"
            >
              <template v-slot:selected-item="scope">
                <q-chip
                  removable
                  dense
                  @remove="scope.removeAtIndex(scope.index)"
                  :tabindex="scope.tabindex"
                  color="white"
                  text-color="purple"
                  class="q-ma-none"
                >
                  {{ scope.opt.label }}
                </q-chip>
              </template>

              <template
                v-slot:option="{ itemProps, opt, selected, toggleOption }"
              >
                <q-item v-bind="itemProps">
                  <q-item-section>
                    {{ opt.label }}
                  </q-item-section>
                  <q-item-section side>
                    <q-toggle
                      :model-value="selected"
                      @update:model-value="toggleOption(opt)"
                    />
                  </q-item-section>
                </q-item>
              </template>
            </q-select>
          </div>
          <div class="col col-sm-12 row justify-end">
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
          </div>
        </div>
      </template>
      <!-- body -->
      <template v-slot:body-cell-action="props">
        <q-td :props="props">
          <div class="q-pa-md q-gutter-sm">
            <q-btn
              round
              class="bg-blue text-white"
              icon="preview"
              size="sm"
              @click="details(props.row)"
            >
              <q-tooltip class="bg-indigo" :offset="[10, 10]">
                Ver registro
              </q-tooltip>
              <q-dialog
                v-model="preview"
                transition-show="rotate"
                transition-hide="rotate"
              >
                <DetailsAccount />
              </q-dialog>
            </q-btn>
            <q-btn
              round
              class="bg-purple text-white"
              icon="edit"
              size="sm"
              @click="eactive = true"
            >
              <q-tooltip class="bg-purple" :offset="[10, 10]">
                Editar Registro
              </q-tooltip>
              <q-dialog
                v-model="eactive"
                persistent
                :maximized="maximizedToggle"
                transition-show="slide-up"
                transition-hide="slide-down"
              >
                <EditActive />
              </q-dialog>
            </q-btn>
            <q-btn
              round
              class="bg-red text-white"
              icon="delete"
              size="sm"
              @click="notifDelete(props.row)"
            >
              <q-tooltip class="bg-red" :offset="[10, 10]">
                Eliminar Registro
              </q-tooltip>
            </q-btn>
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
import DetailsAccount from "./DetailsUser.vue";
import EditActive from "./EditActive.vue";
import { useQuasar } from "quasar";

export default {
  components: {
    DetailsAccount,
    EditActive,
  },
  setup() {
    //state
    const eactive = ref(false);
    const maximizedToggle = ref(true);
    const id = ref("");
    const preview = ref(false);
    const filter = ref("");
    const $q = useQuasar();
    const store = userStore();
    const pagination = ref({
      sortBy: "desc",
      descending: false,
      page: 2,
      rowsPerPage: 5,
    });
    const visibleColumns = ref([
      "displayName",
      "typeName",
      "idCustodio",
      "office",
      "title",
      "lastlogondate",
      "action",
    ]);
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
              store.increment(props.samAccountName);
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
    function details(props) {
      preview.value = true;
      store.detailsItem(props.samAccountName);
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
      filter,
      pagination,
      pagesNumber,
      store,
      notifDelete,
      details,
      visibleColumns,
      preview,
      id,
      eactive,
      maximizedToggle,
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

<template>
  <div>
    <div class="row col justify-end q-mr-sm">
      <q-btn-group>
        <q-btn color="purple" label="Ayuda" icon="help">
          <q-popup-proxy class="row">
            <q-banner class="col-md-12" style="width: 500px">
              <q-item-section class="text-center">
                <q-item-section class="col">
                  <q-item-label> Iconos a Utilizar</q-item-label>
                  <q-item-label caption> Guia básica</q-item-label>
                </q-item-section>
              </q-item-section>
              <q-separator spaced inset />
              <q-item-section class="row">
                <q-list v-for="item in helps" :key="item.title">
                  <q-item>
                    <div class="col">
                      <q-icon :name="item.icon"></q-icon>
                      <label :for="item.icon">{{ item.title }}</label>
                    </div>
                    <q-item-label caption class="col col-md-8">{{
                      item.description
                    }}</q-item-label>
                  </q-item>
                  <q-separator spaced inset />
                </q-list>
              </q-item-section>
            </q-banner>
          </q-popup-proxy>
        </q-btn>
        <q-separator vertical></q-separator>
        <q-btn color="purple" label="Importar CSV" icon="folder_open" />
      </q-btn-group>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const helps = ref([
      {
        title: "Importar CSV",
        description:
          "El botón Importar CSV te permitirá importar desde un archivo csv los registro de usuarios forma mas rapida",
        icon: "folder_open",
      },
      {
        title: "Registro de Tabla",
        description:
          "Es un Registro de Tabla el cual te indicará el total de registro que hay en la base de datos.",
        icon: "table_view",
      },
      {
        title: "Ver Registro",
        description:
          "Este boton te permitirá ver el registro seleccionado de forma mas detallada con campos adicionales que no podrian apreciarse en la tabla.",
        icon: "preview",
      },
      {
        title: "Editar Registro",
        description:
          "Este boton te permitirá editar el registros seleccionado, te mostrará una ventana el cual podras realizar los cambios que deseas.",
        icon: "edit",
      },
      {
        title: "Eliminar Registro",
        description:
          "Este boton te permitirá eliminar el registro seleccionado de la base de datos de forma permanente.",
        icon: "delete",
      },
      {
        title: "Filtro de Columnas",
        description:
          "Este boton te permitirá realizar un filtro de las columnas de la tabla que deseas visualizar.",
        icon: "tune",
      },
    ]);
    return { helps };
  },
};
</script>

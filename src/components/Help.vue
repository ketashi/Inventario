<template>
  <div>
    <div class="row col justify-end q-mr-sm">
      <q-btn-group>
        <q-btn color="purple" label="Ayuda" icon="help">
          <q-popup-proxy class="row">
            <q-banner class="col-md-12" style="width: 500px">
              <q-item class="col">
                <q-icon
                  name="help_center"
                  size="50px"
                  class="q-mr-md text-purple-8"
                />
                <q-item-section>
                  <q-item-label> Herramientas a Utilizar</q-item-label>
                  <q-item-label caption> Guia básica</q-item-label>
                </q-item-section>
              </q-item>
              <q-list class="row">
                <q-item>
                  <div class="col">
                    <q-icon name="folder_open"></q-icon>
                    <label for="Folder_open"> Importar CSV</label>
                  </div>
                  <q-item-label caption class="col col-md-8"
                    >El botón Importar CSV te permitirá importar desde un
                    archivo csv los registro de usuarios forma mas
                    rapida</q-item-label
                  >
                </q-item>
                <q-item>
                  <div class="col">
                    <q-icon name="table_view"></q-icon>
                    <label for="table_view"> Registro de Tabla</label>
                  </div>
                  <q-item-label caption class="col col-md-8"
                    >Es un Registro de Tabla el cual te indicará el total de
                    registro que hay en la base de datos.
                  </q-item-label>
                </q-item>
                <q-item>
                  <div class="col">
                    <q-icon name="preview"></q-icon>
                    <label for="preview"> Ver Registro</label>
                  </div>
                  <q-item-label caption class="col col-md-8"
                    >Este boton te permitirá ver el registro seleccionado de
                    forma mas detallada con campos adicionales que no podrian
                    apreciarse en la tabla.
                  </q-item-label>
                </q-item>
                <q-item>
                  <div class="col">
                    <q-icon name="edit"></q-icon>
                    <label for="edit"> Editar Registro</label>
                  </div>
                  <q-item-label caption class="col col-md-8"
                    >Este boton te permitirá editar el registros seleccionado,
                    te mostrará una ventana el cual podras realizar los cambios
                    que deseas.
                  </q-item-label>
                </q-item>
                <q-item>
                  <div class="col">
                    <q-icon name="delete"></q-icon>
                    <label for="delete"> Eliminar Registro</label>
                  </div>
                  <q-item-label caption class="col col-md-8"
                    >Este boton te permitirá eliminar el registro seleccionado
                    de la base de datos de forma permanente.
                  </q-item-label>
                </q-item>
              </q-list>
            </q-banner>
          </q-popup-proxy>
        </q-btn>
        <q-separator vertical></q-separator>
        <q-btn color="purple" label="Importar CSV" icon="folder_open" />
      </q-btn-group>
    </div>
  </div>
</template>

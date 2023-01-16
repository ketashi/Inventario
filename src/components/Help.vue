<template>
  <q-page>
    <div class="row col justify-end q-mr-sm">
      <q-btn-group>
        <q-btn color="purple" label="Ayuda" icon="help">
          <q-popup-proxy class="row">
            <q-banner class="col-md-12" style="width: 500px">
              <q-item class="col">
                <q-icon
                  name="help_center"
                  color="primary"
                  size="50px"
                  class="q-mr-md"
                />
                <q-item-section>
                  <q-item-label> Herramientas a Utilizar</q-item-label>
                  <q-item-label caption> Guia básica</q-item-label>
                </q-item-section>
              </q-item>
              <q-list class="row">
                <q-item>
                  <q-item-label class="col">Importar CSV</q-item-label>
                  <q-item-label caption class="col col-md-9"
                    >El botón Importar CSV te permitirá importar desde un
                    archivo csv los registro de usuarios forma mas
                    rapida</q-item-label
                  >
                </q-item>
                <q-item>
                  <q-item-label class="col">Registro de Tabla</q-item-label>
                  <q-item-label caption class="col col-md-9"
                    >El Registro de Tabla te indicará el total de registro que
                    hay en la base de datos. Adicionalmente cuenta con un boton
                    editar el cual permitirá editar los registros por si existe
                    algun cambio.
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
  </q-page>
</template>

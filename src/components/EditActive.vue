<template>
  <q-card>
    <q-bar class="bg-purple text-white">
      Editar Registro
      <q-space />
      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip class="bg-white text-purple">Close</q-tooltip>
      </q-btn>
    </q-bar>
    <q-form class="q-gutter-md" @submit="onSubmit">
      <div class="row">
        <div class="col-md-6 q-pa-md" v-for="item in payload" :key="item.label">
          <q-input
            outlined
            clearable
            v-model="item.value"
            :label="item.label"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length > 0) || 'El campo no debe estar vacio',
            ]"
          />
        </div>
      </div>
      <div class="row justify-center text-center">
        <div class="col-md-12 q-pa-md q-gutter-sm">
          <q-btn
            label="Guardar Cambios"
            type="submit"
            class="bg-purple text-white"
          />
          <q-btn label="Cancelar" class="bg-red text-white" />
        </div>
      </div>
    </q-form>
  </q-card>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { userStore } from "src/stores/activeDirectory/userTable";
export default {
  setup() {
    const store = userStore();
    const $q = useQuasar();
    const payload = ref([
      {
        value: store.items.samAccountName,
        label: "Nombre Corto",
      },
      {
        value: store.items.displayName,
        label: "Descripcion de la Cuenta",
      },
      {
        value: store.items.idCustodio,
        label: "ID Custodio",
      },
      {
        value: store.items.office,
        label: "Ubicacion - Sede Agencia",
      },
      {
        value: store.items.departament,
        label: "Ubicacion - Departamento",
      },
      {
        value: store.items.enable.toString(),
        label: "Estado (Activo)",
      },
      {
        value: store.items.whenCreated,
        label: "Fecha de Alta",
      },
      {
        value: store.items.downCreated,
        label: "Fecha de Baja",
      },
      {
        value: store.items.cde,
        label: "Pertenece al CDE",
      },
      {
        value: store.items.commit,
        label: "Comentarios",
      },
      {
        value: store.items.accountExpirationDate.toString(),
        label: "Fecha_Expiracion",
      },
      {
        value: store.items.passwordNeverExpires.toString(),
        label: "Pwd_NoExpira",
      },
      {
        value: store.items.passwordLastSet,
        label: "Pwd_UltimoCambio",
      },
      {
        value: store.items.passwordExpired.toString(),
        label: "Pwd_Expirado",
      },
      {
        value: store.items.passwordNotRequired.toString(),
        label: "Pwd_NoRequerido",
      },
      {
        value: store.items.lockedOut.toString(),
        label: "Cuenta Bloqueda",
      },
      {
        value: store.items.title,
        label: "Cargo",
      },
      {
        value: store.items.lastlogondate,
        label: "Ultimo Logueo",
      },
      {
        value: store.items.whenChanged,
        label: "Ultimo Cambio",
      },
    ]);
    const onSubmit = () => {
      $q.notify({
        message:
          "¿Desea aplicar los cambios del Registro Permanente de la Base de Datos?.",
        color: "blue-10",
        icon: "question_mark",
        position: "top",
        actions: [
          {
            label: "Aceptar",
            color: "purple",
            handler: () => {
              $q.notify({
                message: "Se Aplicaron los cambios correctamente.",
                color: "primary",
                position: "top",
                icon: "approval",
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
    };
    return {
      store,
      payload,
      onSubmit,
    };
  },
};
</script>

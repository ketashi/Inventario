<template>
  <q-card>
    <q-bar class="bg-purple text-white">
      <q-space />
      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip class="bg-white text-purple">Close</q-tooltip>
      </q-btn>
    </q-bar>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <div class="row">
        <div class="col-md-6">
          <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
        <div class="col-md-6">
          <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
        <div class="col-md-6">
          <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </div>
    </q-form>
  </q-card>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const samAccountName = ref(null);
    const displayName = ref(null);
    const typeName = ref(null);
    const idCustodio = ref(null);
    const office = ref(null);
    const departament = ref(null);
    const enable = ref(null);
    const whenCreated = ref(null);
    const downCreated = ref(null);
    const cde = ref(null);
    const commit = ref(null);
    const accountExpirationDate = ref(null);
    const passwordNeverExpires = ref(null);
    const passwordLastSet = ref(null);
    const passwordExpired = ref(null);
    const passwordNotRequired = ref(null);
    const lockedOut = ref(null);
    const title = ref(null);
    const lastlogondate = ref(null);
    const whenChanged = ref(null);
    return {
      samAccountName,
      displayName,
      typeName,
      idCustodio,
      office,
      departament,
      enable,
      whenCreated,
      downCreated,
      cde,
      commit,
      accountExpirationDate,
      passwordNeverExpires,
      passwordLastSet,
      passwordExpired,
      passwordNotRequired,
      lockedOut,
      title,
      lastlogondate,
      whenChanged,
    };
  },
};
</script>

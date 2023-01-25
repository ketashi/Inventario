<template>
  <q-page>
    <Help />
    <TableUser></TableUser>
  </q-page>
</template>

<script>
import Help from "../components/Help.vue";
import TableUser from "../components/Table.vue";
export default {
  components: {
    Help,
    TableUser,
  },
};
</script>

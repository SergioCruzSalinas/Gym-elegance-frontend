<template>
  <v-card>
    <div v-if="isLoading">
      <h1>Cargando información...</h1>
    </div>

    <v-data-table
      v-else
      :headers="headers"
      :items="appointmentActivityData"
    >
      <template v-slot:item.asistencia="{ item }">
        <v-select
          v-model="attendanceState[item.folio]"
          :items="typesAttendance"
          :rules="[v => !!v || 'Asistencia requerida']"
          required
        />
      </template>

      <template v-slot:item.confirmar_asistencia="{ item }">
        <v-btn
          color="primary"
          @click="onSubmit(item.folio)"
        >
          Confirmar
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { getAppointmentByActivityAction, updateAttendanceUserActivity } from "../actions";
import { useRouter } from "vue-router";

const typesAttendance = ["Confirmado", "Ausente"];

const props = defineProps({
  idActivity: {
    type: String,
    required: true,
  },
});

const headers = ref([
  { key: "folio", title: "Folio" },
  { key: "id_usuario", title: "Usuario" },
  { key: "asistencia", title: "Asistencia" },
  { key: "confirmar_asistencia", title: "Confirmar asistencia" },
]);

const attendanceState = ref({});

const { data: appointmentActivity, isLoading, refetch } = useQuery({
  queryKey: ["appointmentActivity", props.idActivity],
  queryFn: () => getAppointmentByActivityAction(props.idActivity),
});

const appointmentActivityData = computed(() => {
  if (!appointmentActivity.value) return [];
  const items = appointmentActivity.value.data || [];
  items.forEach((item) => {
    if (!(item.folio in attendanceState.value)) {
      attendanceState.value[item.folio] = item.asistencia || "";
    }
  });
  return items;
});

const { mutate } = useMutation({
  mutationFn: ({ folio, asistencia }) => updateAttendanceUserActivity(folio, asistencia),
  onSuccess: () => {
    console.log("Asistencia actualizada correctamente");
    window.location.reload();
  },
  onError: (error) => {
    console.error("Error al actualizar la asistencia:", error.message);
  },
});

const onSubmit = (folio) => {
  const asistencia = attendanceState.value[folio];
  if (!folio || !asistencia) {
    console.error("Datos incompletos para actualizar la asistencia");
    return;
  }
  mutate({ folio, asistencia });
};

watchEffect(() => {
  if (props.idActivity) {
    refetch();
  }
});
</script>

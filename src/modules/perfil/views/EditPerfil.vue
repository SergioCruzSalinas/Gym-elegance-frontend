<template>
    <v-row class="mt-16" justify="center">
      <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="d-flex justify-center">
        <v-card class="pa-8 mb-8">
          <v-card-title class="d-flex align-center">
            <v-icon class="mr-2" size="36" color="#FFD700">mdi-account</v-icon>
            <h1 class="text-h5 font-weight-bold mb-0">Información Personal</h1>
          </v-card-title>
  
          <v-divider></v-divider>
  
          <div class="mensaje text-center"></div>
          <br />
  
          <form @submit.prevent="updatedUser">
            <div class="texto">Nombre del usuario</div>
            <v-text-field
              v-model="editUser.nombreUsuario"
              density="comfortable"
              placeholder="Nombre o ID del usuario"
              variant="outlined"
              class="custom-text-field"
              color="primary"
            ></v-text-field>
  
            <div class="texto">Correo electrónico</div>
            <v-text-field
              v-model="editUser.correoElectronico"
              density="comfortable"
              placeholder="Correo electrónico"
              variant="outlined"
              class="custom-text-field"
              color="primary"
            ></v-text-field>
  
            <div class="texto">Teléfono</div>
            <v-text-field
              v-model="editUser.telefono"
              type="number"
              density="comfortable"
              placeholder="Teléfono"
              variant="outlined"
              class="custom-text-field"
              color="primary"
            ></v-text-field>
  
            <v-btn
              type="submit"
              class="mb-8"
              color="#FFD700"
              size="large"
              variant="elevated"
              block   
            >
              <div class="textBtn">Guardar</div>
            </v-btn>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  import { usePerfilStore } from '../stores/perfil.store';
import { useRouter } from 'vue-router';

  const perfilStore = usePerfilStore();
  const router = useRouter();

  const editUser = reactive({
  nombreUsuario: perfilStore.userInfo?.nombre || '',
  correoElectronico: perfilStore.userInfo?.correo_electronico || '',
  telefono: perfilStore.userInfo?.telefono || '',
});

const updatedUser = async () => {
  try {
    const editUserInfo = await perfilStore.updatedUser(editUser.nombreUsuario, editUser.correoElectronico, editUser.telefono);

    if(!editUserInfo.ok){
      editUserInfo.message = "Ocurrio un error"
      return
    }

    router.replace({name:'perfil'})

    return
  } catch (error) {
    console.log(error)
    
  }
}




  </script>
  
  <style scoped>
  .mensaje {
    color: red;
  }
  .texto {
    color: white;
    font-size: 20px;
  }

  .textBtn{
    color: black;
    font-weight: bolder;
    font-size: 20px;

  }
  .custom-text-field .v-input__control .v-field__input {
    color: white; /* Cambia el color del texto */
  }
  .custom-text-field .v-input__control .v-field__placeholder {
    color: white; /* Cambia el color del placeholder */
  }
  </style>
  
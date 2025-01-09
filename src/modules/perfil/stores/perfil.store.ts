import { User } from "@/modules/auth/interfaces";
import { defineStore } from "pinia";
import { ref } from "vue";
import { getUserInfoAction } from "../actions/get-user-info.action";
import { editUserAction } from "../actions";

export const usePerfilStore = defineStore('perfil', () => {
    
    const userInfo = ref<User | undefined>(); 

    const loadUserProfile = async () => {
        try {
            const userInfoResp = await getUserInfoAction();

            if (!userInfoResp.ok) {
                return { ok: false, message: 'Error al cargar los datos del perfil.' };
            }

            userInfo.value = userInfoResp.userInfo;
        
            return {
                ok: true,
                userInfo,  
            };
        } catch (error) {
            console.error('Error al cargar el perfil:', error);
            return { ok: false, message: 'Error al cargar el perfil.' };
        }
    };

    const updatedUser = async (nombreUsuario: string, correoElectronico: string, telefono: string) => {
        try {
            const updatedUserResp = await editUserAction(nombreUsuario, correoElectronico, telefono);

            if (!updatedUserResp) {
                return { ok: false, message: 'Error al actualizar los datos del usuario.' };
            }

            if (userInfo.value) {
                userInfo.value.nombre = updatedUserResp.data.nombreUsuario;
                userInfo.value.correo_electronico = updatedUserResp.data.correoElectronico;
                userInfo.value.telefono = updatedUserResp.data.telefono;
            }

            return { ok: true, message: 'Datos actualizados correctamente.' };
        } catch (error) {
            console.error('Error al actualizar el perfil:', error);
            return { ok: false, message: 'No se pudo actualizar los datos del perfil.' };
        }
    };

    return {
        userInfo,
        loadUserProfile,
        updatedUser,
    };
});

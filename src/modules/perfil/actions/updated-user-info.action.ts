import { GymApi } from "@/api/api"
import { useAuthStore } from "@/modules/auth/stores/auth.store";
import { isAxiosError } from "axios";
import { EditUser } from "../interfaces/edit-user.interface";


const authStore = useAuthStore();
 
export const editUserAction = async(nombreUsuario: string, correoElectronico: string, telefono: string) =>{
    try {
        const { data } = await GymApi.patch<EditUser>(`usuarios/editar/${authStore.user?.id}`, {nombreUsuario, correoElectronico, telefono});

        return {
            data
        }


    } catch (error) {
        if(isAxiosError(error)){
            console.log(error)
        }

        throw new Error('No se pudo actualizar los datos')
        
    }

}
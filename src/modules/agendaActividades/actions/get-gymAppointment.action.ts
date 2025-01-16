import { GymApi } from "@/api/api";
import { GymAppointment } from "../interfaces/gymAppointment.interface";
import { isAxiosError } from "axios";
import { useAuthStore } from "@/modules/auth/stores/auth.store";


const authStore = useAuthStore();

//actividades por usuario

export const getGymAppointmentAction = async () => {

    try {
        const { data } = await GymApi.get<GymAppointment[]>(`agenda-actividades/${authStore.user?.id}`)


        return data;
        
    } catch (error) {
        if(isAxiosError(error)){
            console.log(error)
            return {
                ok: false,
                message: 'Error al obtener la cita'
            }
        }

        return {
            ok: false,
            message: 'Ocurrio un error al mostrar tus actividades'
        }
        
    }

}
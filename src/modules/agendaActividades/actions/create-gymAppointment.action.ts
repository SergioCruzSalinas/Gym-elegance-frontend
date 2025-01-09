import { GymApi } from "@/api/api"
import { GymAppointment } from "../interfaces/gymAppointment.interface"
import { isAxiosError } from "axios"


interface ActivityAppointmentActionError {
    ok: false,
    message: string,
};


interface ActivityAppointmentActionSuccess {
    ok: true,
    data: GymAppointment
}


export const createActivityAppointmentAction = async ( idUsuario: string, idActividad: string ):Promise<ActivityAppointmentActionError | ActivityAppointmentActionSuccess> => {
    try {
        const { data } = await GymApi.post('agenda-actividades/crear-cita', { idUsuario, idActividad   }   )

        return {
            ok: true,
            data,
        }

    } catch (error) {
        if(isAxiosError(error)){            
            return{
                ok: false,
                message: "Ocurrio un error al crear la cita de la actividad",
                
            }
        }
        console.log('Error desde la accion',error)
        throw new Error('No se pudo realizar la peticion')
        

        
    }
}
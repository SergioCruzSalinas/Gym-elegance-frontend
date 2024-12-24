import { GymApi } from "@/api/api"
import { AddActivity } from "../interfaces"
import { isAxiosError } from "axios"

interface UpdateActivityError {
    ok: false
    message: string
}

interface UpdateActivitySuccess {
    ok : true,
    data: AddActivity
}


export const UpdateActivityAction = async (
    descripcion: string, 
    cupo: number, 
    idInstructor: string, 
    fecha: string, 
    horaInicio: string, 
    horaFin: string 
): Promise<UpdateActivityError|UpdateActivitySuccess > => {

    try {
        const { data } = await GymApi.patch('/actividades/editar/:id', {
            descripcion,
            cupo,
            idInstructor,
            fecha,
            horaInicio,
            horaFin   
        });

        console.log("información desde la solicitud:", data);

        return { 
            ok: true,
            data 
        };

    } catch (error) {
        if (isAxiosError(error)) {
        
            const errorMessage = error.response?.data || "Datos no válidos o faltantes";
            console.log("Error desde el servidor:", error.response?.data);  

            return {
                ok: false,
                message: errorMessage  
            };
        }

        console.log("Error inesperado:", error);
        throw new Error('No se pudo realizar la petición');
    }
}

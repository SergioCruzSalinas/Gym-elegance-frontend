import { GymApi } from "@/api/api"
import { AddActivity } from "../interfaces"
import { isAxiosError } from "axios"

interface AddActivityError {
    ok: false
    message: string
}

interface AddActivitySuccess {
    ok : true,
    data: AddActivity
}


export const addActivityAction = async (
    descripcion: string, 
    cupo: number, 
    idInstructor: string, 
    fecha: string, 
    horaInicio: string, 
    horaFin: string 
): Promise<AddActivityError|AddActivitySuccess> => {

    try {
        const { data } = await GymApi.post('/actividades/registrar', {
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

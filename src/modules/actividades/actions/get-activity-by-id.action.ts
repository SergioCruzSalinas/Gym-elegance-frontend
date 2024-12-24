import { GymApi } from "@/api/api"
import { Activity } from "../interfaces"
import { isAxiosError } from "axios"



export const ActivityIdAction = async (activityId : number) => {

    try {
        const { data } = await GymApi.get<Activity>(`/actividades/${activityId}`);

        console.log("información desde la solicitud:", data);
        

        return data;

    } catch (error) {
        if (isAxiosError(error)) {
        
            const errorMessage = error.response?.data || "Datos no válido";
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

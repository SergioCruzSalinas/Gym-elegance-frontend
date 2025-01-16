import { GymApi } from "@/api/api"
import { Activity } from "../interfaces"




export const activitiesIdCoachAction = async (activityId : string) => {
    try {
        const { data } = await GymApi.get<Activity>(`/actividades/${activityId}`);

        return data;

    } catch (error) {

        console.log("Error inesperado:", error);
        throw new Error('No se pudo realizar la petición');
    }
}

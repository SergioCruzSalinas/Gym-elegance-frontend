import { GymApi } from "@/api/api"
import { Activity } from "../interfaces";





export const updateCreateActivity = async (activity: Partial<Activity>) => {
    const activityId = activity.id;

    if(activityId && activityId > 0) {
        return await updateActivityAction(activityId, activity);
    }
    
    return await addActivity(activity);
       
}

const updateActivityAction = async ( activityId: Number, activity: Partial<Activity>) => {

    try {
        const { data } = await GymApi.patch(`/actividades/editar/${activityId}`, activity )
        return data;
    } catch (error) {
       
        throw new Error('No se pudo realizar la petición');
    }
} 


const addActivity = async (activity: Partial<Activity> ) => {

    try {
        const { data } = await GymApi.post('/actividades/registrar', activity )
        return data;
    } catch (error) {
       

        
        console.log("Error inesperado:", error);
        throw new Error('No se pudo realizar la petición');
    }
} 



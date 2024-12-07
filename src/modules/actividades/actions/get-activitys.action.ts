import { GymApi } from "@/api/api";
import { Activity } from "../interfaces/activity.interface";

export const getActivitiesAction = async() => {
    try {

        const { data } = await GymApi.get<Activity[]>('/actividades')

        return data;
        
    } catch (error) {
        console.log(error);
        throw new Error('error getting activities')
        
    }
}
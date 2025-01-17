import { GymApi } from "@/api/api";

export const getActivitiesAction = async() => {
    try {

        const { data } = await GymApi.get('/actividades')

        return data;
        
    } catch (error) {
        console.log(error);
        throw new Error('error getting activities')
        
    }
}
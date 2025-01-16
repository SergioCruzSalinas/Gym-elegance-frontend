import { GymApi } from "@/api/api"


export const getAppointmentByActivityAction = async (idActivity: string) => {
    try {
        const { data } = await GymApi.get(`agenda-actividades/${idActivity}`);
        return data;
    } catch (error) {
        console.log(error.response.data)
        throw new Error('Error getting appointment by action')
        
    }
    

}
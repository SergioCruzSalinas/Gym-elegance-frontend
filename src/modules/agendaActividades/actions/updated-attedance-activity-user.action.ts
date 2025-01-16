import { GymApi } from "@/api/api"


export const updateAttendanceUserActivity = async(folio: string, asistencia: string,) => {
    try {
        const { data } = await GymApi.patch(`agenda-actividades/asistencia/${folio}`, {asistencia});

        return data;
    } catch (error) {
        console.log(error.response.data);
        throw new Error ('Error updating attendance')
        
    }
    
}
import { GymApi } from "@/api/api"
import { UserUpdate } from "@/modules/auth/interfaces"


export const updateCreateCoachAction = async ( coach: Partial<UserUpdate>) =>{

    try {
       
        const { contrasenia, ... coachValues} = coach
        const coachId = coach.id

        const { data } = await GymApi.patch(`/entrenadores/editar/${coachId}`, coachValues);

        return data;


    } catch (error) {

        throw new Error("Error updating coach");
        
    }
    
    
}  












import { GymApi } from "@/api/api"
import { UserUpdate } from "@/modules/auth/interfaces"




export const createCoachAction = async (coach: Partial<UserUpdate>) => {
    try {
        const { data } = await GymApi.post('entrenadores/registrar', coach)
        return data 
    } catch (error) {
        throw new Error('error creating coach')
    }
}
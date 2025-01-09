import { GymApi } from "@/api/api";
import { User } from "@/modules/auth/interfaces";



export const getCoachesAction = async() => {
    try {

        const { data } = await GymApi.get<User[]>('/entrenadores')

        return data;
        
    } catch (error) {
        console.log(error);
        throw new Error('error getting memberships')
        
    }
}
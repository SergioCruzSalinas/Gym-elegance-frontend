import { GymApi } from "@/api/api";
import { User } from "@/modules/auht/interfaces";



export const getCoachesAction = async() => {
    try {

        const { data } = await GymApi.get<User[]>('/entrenadores')

        console.log('get coaches data', data)

        return data;
        
    } catch (error) {
        console.log(error);
        throw new Error('error getting memberships')
        
    }
}
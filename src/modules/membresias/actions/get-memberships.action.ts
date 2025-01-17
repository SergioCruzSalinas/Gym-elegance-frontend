import { GymApi } from "@/api/api";


export const getMembershipsAction = async() => {
    try {

        const { data } = await GymApi.get('/membresias')

        return data;
        
    } catch (error) {
        console.log(error);
        throw new Error('error getting memberships')
        
    }
}
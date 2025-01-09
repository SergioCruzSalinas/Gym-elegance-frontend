import { GymApi } from "@/api/api";
import { Membership } from "../interfaces/membership.interface";


export const getMembershipsAction = async() => {
    try {

        const { data } = await GymApi.get<Membership[]>('/membresias')

        return data;
        
    } catch (error) {
        console.log(error);
        throw new Error('error getting memberships')
        
    }
}
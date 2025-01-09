import { GymApi } from "@/api/api";
import { Membership } from "../interfaces/membership.interface";



export const createUpdateMembreship = async (membership: Partial<Membership>) => {
    const membershipId = membership.id;

    if( membershipId && membershipId !== '' ) {

        return await updateMembership(membershipId, membership);
    }

    return await createMembership(membership);
}


const updateMembership = async (membershipId: string, membership: Partial<Membership>) => {
    try {
        const { data } = await GymApi.patch(`/membresias/editar/${membershipId}`, membership);
        return data;
    } catch (error) {
        console.log(error.response.data)
        throw new Error('Error updating membership')

    }
}

const createMembership = async (membership: Partial<Membership>) => {
    try {
        const { data } = await GymApi.post('/membresias/crear-membresia', membership);
        return data;
    } catch (error) {
        console.log(error.response.data)
        throw new Error('Error creating membership');
    }
}
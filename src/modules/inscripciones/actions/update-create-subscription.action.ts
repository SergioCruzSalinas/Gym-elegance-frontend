import { GymApi } from "@/api/api"
import { Subscribe } from "../interfaces/subscribe.interface"


export const updateCreateSubscriptionAction = async (subscription: Partial<Subscribe>) => {
    const idSubscription = subscription.id;
    if(idSubscription && idSubscription !== '') {
        return await updateSubscription(idSubscription, subscription);
    }

    return await createSubscription(subscription);

}


const updateSubscription = async (idSubscription: string, subscription: Partial<Subscribe>) => {
    try {
        const { data } = await GymApi.patch(`/inscripciones/editar/${idSubscription}`, subscription);

        return data;
    } catch (error) {
        console.log(error)
        throw new Error('Error updating subscription');
        
    }
}

const createSubscription = async ( subscription: Partial<Subscribe>) => {
    try {
        const { data } = await GymApi.post(`inscripciones/crear`, subscription);

        return data;
    } catch (error) {
        console.log(error)
        throw new Error('Error creating subscription');
        
    }
}
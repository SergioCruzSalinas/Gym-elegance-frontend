import { GymApi } from "@/api/api";
import { Subscribe } from "../interfaces/subscribe.interface";



export const getSubscriptionByIdAction = async (idSubscription: string)  => {
    if(idSubscription === '' || idSubscription === undefined) {
        return {
            id: '',
            id_usuario: '',
            id_membresia: '',
            fecha_inicio: ''
        }

    }
    try {
        const { data } = await GymApi.get<Subscribe>(`inscripciones/${idSubscription}`)

        return data;

    } catch (error) {
        console.log("ERRORSISMO",error.response.data);

        throw new Error('No se pudo realizar la peticion')
        
    }

}
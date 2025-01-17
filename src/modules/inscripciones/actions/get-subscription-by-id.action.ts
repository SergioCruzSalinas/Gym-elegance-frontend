import { GymApi } from "@/api/api";



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
        const { data } = await GymApi.get(`inscripciones/${idSubscription}`)

        return data;

    } catch (error) {
        throw new Error('No se pudo realizar la peticion')
        
    }

}
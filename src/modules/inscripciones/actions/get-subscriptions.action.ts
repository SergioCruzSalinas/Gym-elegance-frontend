import { isAxiosError } from "axios";
import { Subscribe } from "../interfaces/subscribe.interface";
import { GymApi } from "@/api/api";


export const getSubscriptionsAction = async () => {
    try {
        const { data } = await GymApi.get<Subscribe[]>('inscripciones')
        
        return data

    } catch (error) {
        if(isAxiosError(error)){
            return {
                ok: false,
            }
        }

        throw new Error("No se pudo cargar las inscripciones")
        
    }

}
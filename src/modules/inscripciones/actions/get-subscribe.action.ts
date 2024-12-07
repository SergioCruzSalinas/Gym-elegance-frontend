import { GymApi } from "@/api/api";
import { useAuthStore } from "@/modules/auht/stores/auth.store";
import { isAxiosError } from "axios";
import { Subscribe } from "../interfaces/subscribe.interface";

const authStore = useAuthStore();

interface SubscribeError {
    ok: false;
    message: string;
}

interface SubscribeSuccess {
    ok: true;
    subscribe: Subscribe;
}

export const getSubscribeAction = async () :Promise<SubscribeError | SubscribeSuccess>  => {
    try {
        const { data } = await GymApi.get(`inscripciones/${authStore.user?.id}`)


        return {
            ok: true,
            subscribe: data,
        }

    } catch (error) {
        if(isAxiosError(error)) {
            return {
                ok:false,
                message: 'Ocurrio un error'
            }
        }
        console.log(error);
        throw new Error('No se pudo realizar la peticion')
        
    }

}
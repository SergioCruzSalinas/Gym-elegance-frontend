import { GymApi } from "@/api/api"
import { isAxiosError } from "axios"





export const idMembershipAction = async (idMembresia: string) => {
    if(idMembresia === undefined){
        return {
            id:'',
            tipo : '',
            descripcion : '',
            precio : '',
            dias_duracion : '',
            mes_duracion : '',
        
            
        }
    }
    try {
        const { data } = await GymApi.get(`/membresias/${idMembresia}`)

        return data
    } catch (error) {

        if(isAxiosError(error)) {
            return false;
        }

        console.log("Ocurrio un error", error)
        throw new Error("No se pudo realizar la peticion")
    }
}
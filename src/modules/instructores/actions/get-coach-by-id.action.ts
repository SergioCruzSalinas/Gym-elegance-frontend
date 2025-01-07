import { GymApi } from "@/api/api"
import { UserUpdate } from "@/modules/auth/interfaces";






export const getCoachByIdACtion = async (idCoach: string): Promise<UserUpdate> => {
    if( idCoach === undefined || idCoach === null || idCoach === 'create'){
        return {
            id: '',
            nombre: '',
            correo_electronico: '',
            telefono: '',
            contrasenia: '',
        }

    }

    
    try {
        const { data } = await GymApi.get(`/entrenadores/${idCoach}`) 

        return data
    } catch (error) {
        console.log("Ocurrio un error", error)
        throw new Error("No se pudo realizar la peticion")

        
    }
}
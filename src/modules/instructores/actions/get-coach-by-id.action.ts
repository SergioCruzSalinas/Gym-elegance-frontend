import { GymApi } from "@/api/api"






export const getCoachByIdACtion = async (idCoach: string)=> {
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
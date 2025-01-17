import { GymApi } from "@/api/api"




export const activityIdAction = async (activityId : number) => {
    if(activityId === undefined || isNaN(activityId)){
        return {
            id: 0,
            descripcion: '',
            id_instructor: '',
            cupo: 0,
            fecha:'',
            fecha_inicio: '',
            fecha_fin: '',

        }
        
    }

    try {
        const { data } = await GymApi.get(`/actividades/${activityId}`);

        

        return data;

    } catch (error) {

        console.log("Error inesperado:", error);
        throw new Error('No se pudo realizar la petición');
    }
}

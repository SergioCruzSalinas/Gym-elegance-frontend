import { defineStore } from "pinia";
import { createActivityAppointmentAction } from "../actions";


export const useGymAppointment = defineStore('gymAppointment', () => {

    const registerActivityAppointment = async (idUsuario: string, idActividad: string)=> {
        try {
            const registerActivityResp = await createActivityAppointmentAction(idUsuario, idActividad);

            if(!registerActivityResp.ok){
                return false
            }

            return true;

        } catch (error) {
            console.log(error)
            return false;
            
        }
        
    }

    return {
        registerActivityAppointment,
    }
})
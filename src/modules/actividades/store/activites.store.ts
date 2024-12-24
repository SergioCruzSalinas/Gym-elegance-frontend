import { defineStore } from "pinia";
import { ref } from "vue";
import { Activity } from "../interfaces/activity.interface";
import { addActivityAction, getActivitiesAction } from "../actions";


export const useActivitiesStore = defineStore('activities',() => {
    const activities = ref<Activity|undefined>()

    const getActivities = async() => {
        try {
            const activitiesResp = await getActivitiesAction();

            if(!activitiesResp){
                return false
            }
          
            activities.value = activitiesResp.data

            console.log(activities)

            return{
                activities
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    const createActivity = async ( 
        descripcion: string, 
        cupo: number, 
        idInstructor: string, 
        fecha: string, 
        horaInicio: string, 
        horaFin: string
    ) => {
        try {
            const addActivityResp = await addActivityAction(
                descripcion, 
                cupo, 
                idInstructor, 
                fecha, 
                horaInicio, 
                horaFin
            )

            if(!addActivityResp.ok){
                return false
            }

            return true
        } catch (error) {
            return false
            
        }

    }





    return{
        activities,

        getActivities,
        createActivity,
    }
})
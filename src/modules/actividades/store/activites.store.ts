import { defineStore } from "pinia";
import { ref } from "vue";
import { Activity } from "../interfaces/activity.interface";
import { getActivitiesAction } from "../actions";


export const useActivitiesStore = defineStore('activities',() => {
    const activities = ref<Activity|undefined>()

    const getActivities = async() => {
        try {
            const activitiesResp = await getActivitiesAction();

            if(!activitiesResp){
                return false
            }
          
            activities.value = activitiesResp.data

            return{
                activities
            }
        } catch (error) {
            console.log(error);
            
        }
    }

    return{
        activities,

        getActivities,
    }
})
import { defineStore } from "pinia";
import { getSubscribeAction } from "../actions";
import { ref } from "vue";
import { Subscribe } from "../interfaces/subscribe.interface";


export const useSubscriptionsStore = defineStore('subscribe', () => {
    const subscribe = ref<Subscribe | undefined>();

    const loadSubscribe = async() => {
        try {
            const subscribeResp = await getSubscribeAction();

            if(!subscribeResp.ok){
                return false;
            }

            subscribe.value = subscribeResp.data

            return {
                ok: true,
                subscribe
            }

        } catch (error) {
            console.log(error)
            return false
            
        }
    }

    return{
        subscribe,
        
        loadSubscribe,


    }
})
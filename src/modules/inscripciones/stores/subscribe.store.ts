import { defineStore } from "pinia";
import { getSubscribeAction } from "../actions";
import { ref } from "vue";
import { Subscribe } from "../interfaces/subscribe.interface";





export const useSubscribeStore = defineStore('subscribe', () => {
    const subscribe = ref<Subscribe | undefined>();

    const loadSubscribe = async() => {
        try {
            const subscribeResp = await getSubscribeAction();

            if(!subscribeResp.ok){
                return false;
            }

            subscribe.value = subscribeResp.subscribe

            console.log('informacion de la suubscribe desde la store', subscribe.value)

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
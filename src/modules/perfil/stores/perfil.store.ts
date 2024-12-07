import { User } from "@/modules/auht/interfaces";
import { defineStore } from "pinia";
import { ref } from "vue";
import { getUserInfoAction } from "../actions/get-user-info.action";





export const usePerfilStore = defineStore('perfil', () => {
    const userInfo = ref<User|undefined>();

    const loadUserProfile = async() => {
        try {
            const userInfoResp = await getUserInfoAction();

            if(!userInfoResp.ok) {
                return false;
            }

            userInfo.value = userInfoResp.userInfo
            console.log('informacion de userInfo', userInfo)
            console.log('informacion de la peticion', userInfoResp)

            return {
                ok:true,
                userInfo,
            }


        } catch (error) {
            console.log(error)
            return false
            
        }

    }






    return {
        userInfo,

        loadUserProfile,
    }
})
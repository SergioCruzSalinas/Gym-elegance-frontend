import { GymApi } from "@/api/api"
import { User } from "@/modules/auth/interfaces";
import { useAuthStore } from "@/modules/auth/stores/auth.store"
import { isAxiosError } from "axios"

const authStore = useAuthStore()

interface UserInfoError {
    ok: false;
    message: string;
  }
  
  interface UserInfoSuccess {
    ok: true;
    userInfo: User;
  }


export const getUserInfoAction = async () :Promise<UserInfoError|UserInfoSuccess> => {

  try {
    
    const { data } = await GymApi.get(`/usuarios/${authStore.user?.id}`)

    return {
        ok: true,
        userInfo: data.data
    }
  } catch (error) {

    if(isAxiosError(error)) {
        return {
            ok: false,
            message: 'Ocurrio un error'
        }
    }

    console.log(error);
    throw new Error('No se pudo realizar la peticion')
    
  }


}
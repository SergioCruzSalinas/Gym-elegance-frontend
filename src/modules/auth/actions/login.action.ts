import { GymApi } from "@/api/api"
import { UserAuth } from "../interfaces"
import { isAxiosError } from "axios";

interface LoginError {
    ok: false;
    message: string;
  }
  
  interface LoginSuccess {
    ok: true;
    user: UserAuth;
    token: string;
  }

export const loginAction = async(correoElectronico: string, contrasenia: string ) :Promise<LoginError|LoginSuccess> => {

    try {
        const { data } = await GymApi.post<UserAuth>('/crear-sesion', {
            correoElectronico,
            contrasenia
        });

        return {
            ok: true,
            user: data.data,
            token: data.data.at   
        }
    } catch (error) {

        if(isAxiosError(error) && error.response?.status === 401 ) {
            return {
                ok: false,
                message: 'Usuario y/o contraseña incorrectas',
            };
        }
        console.log(error)
        throw new Error('No se pudo realizar la peticion')
        
    }
}
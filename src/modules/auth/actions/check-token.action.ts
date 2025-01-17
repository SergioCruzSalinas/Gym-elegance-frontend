import { GymApi } from "@/api/api";
import { isAxiosError } from "axios";
import { UserAuth } from "../interfaces";

interface CheckError {
    ok: false;
}
interface CheckSuccess {
    ok: true;
    user: UserAuth;
    token: string;
}


export const checkTokenAction = async ():Promise<CheckError | CheckSuccess> => {
    try{
        const localToken = localStorage.getItem('token');
        if(localToken && localToken.length < 10) {
            return { ok: false };
        }

        const { data } = await GymApi.get('/check-token');

        return {
            ok: true,
            user: data?.data,
            token: data?.data.at   
        }

    }catch(error){

        if(isAxiosError(error) && error.response?.status === 401 ) {
            return {
                ok: false,
            };
        }
        console.log(error)
        throw new Error('No se pudo verificar la sesion')

    }


 }
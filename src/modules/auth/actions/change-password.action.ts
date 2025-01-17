import { GymApi } from "@/api/api"


export const changePasswordAction = async( contrasenia: string, contraseniaNueva: string) => {
    try {
        const {data} = await GymApi.patch('usuarios/cambiar-contrasenia', {contrasenia, contraseniaNueva});

        return data;
    } catch (error) {
        throw new Error('error updating password');
        
    }

}

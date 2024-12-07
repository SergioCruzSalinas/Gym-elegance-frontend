import { GymApi } from "@/api/api";
import { User } from "../interfaces";

interface RegisterError {
    ok: false;
    message: string;
}

interface RegisterSuccess {
    ok: true;
    user: User;
}

export const RegisterAction = async (
    nombreUsuario: string,
    correoElectronico: string,
    telefono: string,
    contrasenia: string,
): Promise<RegisterError | RegisterSuccess> => {
    try {
        const { data } = await GymApi.post<User>('usuarios/crear-usuario', {
            nombreUsuario,
            correoElectronico,
            telefono,
            contrasenia,
        });

        console.log(data);

        return {
            ok: true,
            user: data.user,                                                            
        }

    } catch (error) {
        console.log(error);
        return {
            ok: false,
            message: 'No se pudo crear el usuario'
        }
    }
}
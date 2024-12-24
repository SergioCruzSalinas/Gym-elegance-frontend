import { GymApi } from "@/api/api"
import { isAxiosError } from "axios"
import { Membership } from "../interfaces/membership.interface"





export const idMembershipAction = async (idMembresia: string) => {
    try {
        const { data } = await GymApi.get<Membership>(`/membresias/${idMembresia}`)

        console.log(data)

        return data
    } catch (error) {

        if(isAxiosError(error)) {
            return false;
        }

        console.log("Ocurrio un error", error)
        throw new Error("No se pudo realizar la peticion")
    }
}
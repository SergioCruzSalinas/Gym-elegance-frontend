
export interface Membership {
    id: string;
    tipo: string;
    dias_duracion: number; 
    mes_duracion: number;
    descripcion: string;
    precio: DoubleRange;
    estatus: boolean;

}
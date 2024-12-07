
export interface Membership {
    id: number;
    tipo: string;
    dias_duracion: number; 
    mes_duracion: number;
    descripcion: string;
    precio: DoubleRange;
    estatus: boolean;

}
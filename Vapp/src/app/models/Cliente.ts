import { Boleta } from "./Boleta";

export class Cliente{
    id: number;
    nombre: string;
    numberPhone: string;
    listBoletas: Boleta[];

    constructor(id: number, nombre: string, numberPhone: string, listBoletas: Boleta[]){
        this.id = id;
        this.nombre = nombre;
        this.numberPhone = numberPhone;
        this.listBoletas = listBoletas;
    }
}
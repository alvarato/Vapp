import { Cliente } from "./Cliente";
import { Producto } from "./Producto";

export class Boleta{
    id: number;
    clienteId: number;
    listProductos: Producto[];
    saldoAnt: number;
    pago: number;

    constructor(id: number, cliente: number, listProductos: Producto[], saldoAnt: number, pago: number){
        this.id = id;
        this.clienteId = cliente;
        this.listProductos = listProductos;
        this.saldoAnt = saldoAnt;
        this.pago = pago;
    }

}
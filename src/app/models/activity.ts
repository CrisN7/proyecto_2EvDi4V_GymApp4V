import { Monitor } from "./monitor";

export class Activity {

    nombre: string;
    img: string;
    monitores: Monitor[];
    horaInicio: string;
    horaFin: string;

    constructor(nombre: string, img: string, monitores: Monitor[], horaInicio: string, horaFin: string) {
        this.nombre = nombre;
        this.img = img;
        this.monitores = monitores;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
    }


}

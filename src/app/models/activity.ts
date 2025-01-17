import { Monitor } from "./monitor";

export class Activity {

    name: string;
    img: string;
    monitors: Monitor[];

    constructor(nombre: string, img: string, monitores: Monitor[]) {
        this.name = nombre;
        this.img = img;
        this.monitors = monitores;
    }


}

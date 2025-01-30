import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsCommunicationService {


  private selectedDate: Subject<Date> = new Subject<Date>();//Subject es una clase de RxJS que actúa como un emisor de datos (Observable) y, al mismo tiempo, como un receptor de datos (Observer). Aquí, selectedDate se declara como un Subject que emitirá valores de tipo date.
  
  //El símbolo $ en los nombres de variables en Angular (y en general en RxJS) es una convención de nomenclatura para identificar Observables. No es obligatorio usarlo, pero es una práctica común que ayuda a distinguir entre: Observables(variables que puedes suscribirte para recibir datos asíncronos) y otros tipos de datos (variables normales, como strings, objetos, números, etc)
  selectedDateObservable$ = this.selectedDate.asObservable();//Cuando conviertes un Subject en un Observable con el método asObservable(), estás creando un Observable puro basado en el Subject. Esto se hace para evitar que los componentes que se suscriban puedan llamar directamente a métodos como next().  Asi otros componentes pueden suscribirse para observar esos datos.

  constructor() { }

}

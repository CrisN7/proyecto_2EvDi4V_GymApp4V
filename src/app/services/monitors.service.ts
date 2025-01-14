import { Injectable } from '@angular/core';
import { Monitor } from '../models/monitor';

@Injectable({
  providedIn: 'root'
})
export class MonitorsService {

  monitorGoyena = new Monitor("Miguel Goyena", "miguel_goyena@cuatrovientos.org", "643231413");
  monitorRodriguez = new Monitor("Lucía Rodriguez", "lucia_rodriguez@cuatrovientos.org", "999999999");
  monitorDominguez = new Monitor("Lurdes Dominguez", "ldominguez@gmail.com", "643231413");
  monitorJoaquin = new Monitor("Joaquín Rodriguez", "jrodri@hotmail.es", "643231413");


  constructor() { }
}

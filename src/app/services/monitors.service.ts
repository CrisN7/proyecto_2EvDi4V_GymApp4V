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

  monitorsList: Monitor[] = [this.monitorGoyena, this.monitorRodriguez, this.monitorDominguez, this.monitorJoaquin];

  constructor() {

  }

  addMonitor(monitor: Monitor){
    this.monitorsList.push(monitor);
  }

  editMonitor(indexMonitor: number, monitor: Monitor){
    this.monitorsList[indexMonitor] = monitor;
  }
  
  deleteMonitor(monitorIndex: number){
    this.monitorsList.splice(monitorIndex, 1);
  }
}

import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';
import { ActivitiesService } from './activities.service';
import { MonitorsService } from './monitors.service';
import { Monitor } from '../models/monitor';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesGroupedByDateService {

  savedActivitiesByDate: { [keyUniqueDate: string]: {[keyNumberActivity: string]: Activity} }  = {};

  constructor(private activitiesService: ActivitiesService) {
    let allActivities: Activity[] = this.activitiesService.activitiesList;

    this.savedActivitiesByDate = {
      "Thu Jan 23 2025 00:00:00 GMT+0100 (hora estándar de Europa central)" : {"activity1": allActivities[0], "activity3": allActivities[2]},
      "Wed Apr 30 2025 00:00:00 GMT+0200 (hora de verano de Europa central)": {"activity1": allActivities[2], "activity2": allActivities[1]}
    
    };
  }




  deleteActivityFromDate(keyUniqueDate: string, keyNumberActivity: string){

    // Verificar si la fecha existe en el objeto. TODO ESTE PRIMER IF CREO QUE ESTA DEMAS
    if (this.savedActivitiesByDate[keyUniqueDate]) {
      // Eliminar la actividad especificada
      delete this.savedActivitiesByDate[keyUniqueDate][keyNumberActivity];

      // Si no hay más actividades en esa fecha, se puede eliminar la fecha completa
      if (Object.keys(this.savedActivitiesByDate[keyUniqueDate]).length === 0) {
        delete this.savedActivitiesByDate[keyUniqueDate];
      }
    }
  }

  


  

  //TODO las activities se guardan correctamente pero cambiando y volviendo otra vez a la fecha donde se guardaron
  addActivityFromDate(selectedDate: Date, activityKey: string, activity: Activity){
    if (!this.savedActivitiesByDate[selectedDate.toString()]) {
      this.savedActivitiesByDate[selectedDate.toString()] = {};
    }
    this.savedActivitiesByDate[selectedDate.toString()][activityKey] = activity;


  }

  public getActivitiesFromDate(date: Date) {
    return this.savedActivitiesByDate[date.toString()];
  }
  
  //TODO tests
  showacts(){
    for(let key in this.savedActivitiesByDate){
      console.log(key + " -> ");
      console.log(this.savedActivitiesByDate[key]);
      for(let key2 in this.savedActivitiesByDate[key]){
        console.log(key2 + "->" );
        console.log(this.savedActivitiesByDate[key][key2]);
      }

      console.log("--------");
    }
  }
}

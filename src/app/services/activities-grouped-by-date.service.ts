import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';
import { ActivitiesService } from './activities.service';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesGroupedByDateService {

  savedActivitiesByDate: { [keyUniqueDate: string]: {[keyNumberActivity: string]: Activity} }  = {};

  constructor(private activitiesService: ActivitiesService) {
    let allActivities: Activity[] = this.activitiesService.activitiesList;

    this.savedActivitiesByDate = {
      "Thu Apr 20 2025 00:00:00 GMT+0100 (hora estándar de Europa central)" : {"activity1": allActivities[0], "activity3": allActivities[2]},
      "Wed Apr 30 2025 00:00:00 GMT+0200 (hora de verano de Europa central)": {"activity1": allActivities[2], "activity2": allActivities[1]}
    };
  }




  deleteActivityFromDate(keyUniqueDate: string, keyNumberActivity: string){

    //Eliminamos la actividad especificada
    delete this.savedActivitiesByDate[keyUniqueDate][keyNumberActivity];

    //Si no hay más actividades en esa fecha, se puede eliminamos la fecha completa
    if (Object.keys(this.savedActivitiesByDate[keyUniqueDate]).length === 0) {
      delete this.savedActivitiesByDate[keyUniqueDate];
    }
    
  }


  addActivityFromDate(selectedDate: Date, activityKey: string, activity: Activity){
    if (!this.savedActivitiesByDate[selectedDate.toString()]) {
      this.savedActivitiesByDate[selectedDate.toString()] = {};
    }
    this.savedActivitiesByDate[selectedDate.toString()][activityKey] = activity;


  }

  public getActivitiesFromDate(date: Date) {
    return this.savedActivitiesByDate[date.toString()];
  }
  
  
}

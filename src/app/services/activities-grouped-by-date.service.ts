import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';
import { ActivitiesService } from './activities.service';
import { MonitorsService } from './monitors.service';
import { Monitor } from '../models/monitor';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesGroupedByDateService {

   savedActivitiesByDate: { [keyUniqueDate: string]: {[keyNumberActivity: string]: Activity} }  = {};

  constructor(private activitiesService: ActivitiesService, private monitorsService: MonitorsService) {
    let allActivities: Activity[] = this.activitiesService.activitiesList;
    let allMonitors: Monitor[] = this.monitorsService.monitorsList;

    this.savedActivitiesByDate = {
      "Thu Jan 23 2025 00:00:00 GMT+0100 (hora estándar de Europa central)" : {"activity1": allActivities[0], "activity3": allActivities[2]},
      "Wed Apr 30 2025 00:00:00 GMT+0200 (hora de verano de Europa central)": {"activity1": allActivities[2], "activity2": allActivities[1]}
    
    };

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

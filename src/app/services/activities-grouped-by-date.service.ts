import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesGroupedByDateService {

  savedActivitiesByDate: { [keyUniqueDate: string]: {[keyNumberActivity: string]: Activity} }  = {};
  constructor() { }

  addActivityFromDate(selectedDate: Date, keyNumberActivity: string, activity: Activity){
    this.savedActivitiesByDate[selectedDate.toISOString()] = {keyNumberActivity : activity};
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

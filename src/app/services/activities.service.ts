import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';
import { MonitorsService } from './monitors.service';

@Injectable({
  providedIn: 'root'
})

export class ActivitiesService {

  activitySpinning: Activity;
  activityBodyPump: Activity;
  activityPilates: Activity;

  activitiesList: Activity[];


  constructor(private monitorsService: MonitorsService) { 

    this.activitySpinning = new Activity("Spinning", "icons/spinning.svg", [monitorsService.monitorGoyena], "10:00", "11:30");
    this.activityBodyPump = new Activity("BodyPump", "icons/bodypump.svg", [monitorsService.monitorJoaquin, monitorsService.monitorDominguez], "10:00", "11:30");
    this.activityPilates = new Activity("Pilates", "icons/pilates.svg", [monitorsService.monitorGoyena, monitorsService.monitorRodriguez], "10:00", "11:30");


    this.activitiesList = [this.activitySpinning, this.activityBodyPump, this.activityPilates];
  }
}

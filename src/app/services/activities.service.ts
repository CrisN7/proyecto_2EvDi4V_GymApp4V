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

    this.activitySpinning = new Activity("Spinning", "icons/spinning.svg", [monitorsService.monitorGoyena]);
    this.activityBodyPump = new Activity("BodyPump", "icons/bodypump.svg", [monitorsService.monitorJoaquin, monitorsService.monitorDominguez]);
    this.activityPilates = new Activity("Pilates", "icons/pilates.svg", [monitorsService.monitorGoyena, monitorsService.monitorRodriguez]);


    this.activitiesList = [this.activitySpinning, this.activityBodyPump, this.activityPilates];
  }
}

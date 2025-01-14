import { Component } from '@angular/core';
import { Activity } from '../models/activity';
import { ActivitiesService } from '../services/activities.service';
import {AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-activity',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})

export class ActivityComponent {

  activitiesOfTheDay: { [clave: string]: Activity } = {};

  constructor(private activitiesService: ActivitiesService) {
    this.activitiesOfTheDay["firstActivity"] = activitiesService.activitiesList[0];
    //this.activitiesOfTheDay["secondActivity"] = activitiesService.activitiesList[1];
    this.activitiesOfTheDay["thirdActivity"] = activitiesService.activitiesList[2];
  }

  addActivity() {
    //this.activitiesOfTheDay["secondActivity"] = activity;
  }
}

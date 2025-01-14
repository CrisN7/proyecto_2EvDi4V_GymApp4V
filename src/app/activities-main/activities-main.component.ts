import { Component } from '@angular/core';
import { ActivitiesContainerComponent } from "../activities-container/activities-container.component";
import { ActivityComponent } from "../activity/activity.component";
import { FormAddActivityComponent } from "../form-add-activity/form-add-activity.component";

@Component({
  selector: 'app-activities-main',
  imports: [ActivitiesContainerComponent, ActivityComponent, FormAddActivityComponent],
  templateUrl: './activities-main.component.html',
  styleUrl: './activities-main.component.scss'
})
export class ActivitiesMainComponent {

}

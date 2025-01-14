import { Component } from '@angular/core';
import { ActivityComponent } from "../activity/activity.component"; 

@Component({
  selector: 'app-activities-container',
  imports: [ActivityComponent],
  templateUrl: './activities-container.component.html',
  styleUrl: './activities-container.component.scss'
})
export class ActivitiesContainerComponent {

}

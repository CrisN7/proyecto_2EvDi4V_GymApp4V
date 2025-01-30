import { Component } from '@angular/core';
import { ActivitiesContainerComponent } from "../activities-container/activities-container.component";

@Component({
  selector: 'app-activities-main',
  imports: [ActivitiesContainerComponent],
  templateUrl: './activities-main.component.html',
  styleUrl: './activities-main.component.scss'
})
export class ActivitiesMainComponent {

}

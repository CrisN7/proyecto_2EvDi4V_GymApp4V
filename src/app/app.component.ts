import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivitiesContainerComponent } from './activities-container/activities-container.component';
import { ActivityComponent } from "./activity/activity.component";
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, ActivitiesContainerComponent, ActivityComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
}) 
export class AppComponent {
  title = '4V Gym';//titulo de la pestaña
}

import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivitiesContainerComponent } from './activities-container/activities-container.component';
import { ActivityComponent } from "./activity/activity.component";
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { HammerModule } from '@angular/platform-browser';
import { IgxCalendarModule } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, ActivitiesContainerComponent, ActivityComponent, RouterOutlet, RouterLink, RouterLinkActive, IgxCalendarModule, HammerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
}) 
export class AppComponent {
  title = '4V Gym';//titulo de la pestaña
}

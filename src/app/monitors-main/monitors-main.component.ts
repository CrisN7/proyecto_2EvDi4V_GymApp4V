import { Component } from '@angular/core';
import { MonitorCardComponent } from "../monitor-card/monitor-card.component";
import { CarouselMonitorsComponent } from "../carousel-monitors/carousel-monitors.component";

@Component({
  selector: 'app-monitors-main',
  imports: [MonitorCardComponent, CarouselMonitorsComponent],
  templateUrl: './monitors-main.component.html',
  styleUrl: './monitors-main.component.scss'
})
export class MonitorsMainComponent {

}

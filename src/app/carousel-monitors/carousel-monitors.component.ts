import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorsService } from '../services/monitors.service';
import { Monitor } from '../models/monitor';
import { MonitorCardComponent } from "../monitor-card/monitor-card.component";

@Component({
  selector: 'app-carousel-monitors',
  imports: [CommonModule, MonitorCardComponent],
  templateUrl: './carousel-monitors.component.html',
  styleUrl: './carousel-monitors.component.scss'
})
export class CarouselMonitorsComponent {

  allMonitors: Monitor[];

  constructor(private monitorsService: MonitorsService){
    this.allMonitors = monitorsService.monitorsList;
  }

  currentSlide = 0; // Índice del primer grupo visible
  imagesPerSlide = 3; // Número de imágenes visibles a la vez


  get visibleMonitors() {
    // Si el grupo visible se sale del array, ajusta el índice para retroceder
    if (this.currentSlide + this.imagesPerSlide > this.allMonitors.length) {
      return this.allMonitors.slice(this.allMonitors.length - this.imagesPerSlide);
    }
    
    return this.allMonitors.slice(
      this.currentSlide,
      this.currentSlide + this.imagesPerSlide
    );
  }

  nextSlide() {
    if (this.currentSlide + this.imagesPerSlide < this.allMonitors.length) {
      this.currentSlide += this.imagesPerSlide;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide -= this.imagesPerSlide;
    }
  }



 

}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorsService } from '../services/monitors.service';
import { Monitor } from '../models/monitor';
import { MonitorCardComponent } from "../monitor-card/monitor-card.component";
import { FormMonitorComponent } from "../form-monitor/form-monitor.component";
import { DeleteAlertComponent } from "../delete-alert/delete-alert.component";
import { Activity } from '../models/activity';
@Component({
  selector: 'app-carousel-monitors',
  imports: [CommonModule, MonitorCardComponent, FormMonitorComponent, DeleteAlertComponent],
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


  isFormMonitorHidden = true;
  monitorToEdit: Monitor | undefined;
  showFormMonitor(Monitor?: Monitor) {
    this.isFormMonitorHidden = false;
    
    if(Monitor !== undefined) {
      this.monitorToEdit = Monitor;
      return;
    }

    this.monitorToEdit = undefined;
  }


  
  isDeleteAlertHidden = true;
  showDeleteAlert(objectToDelete: Monitor | Activity) {
    this.isDeleteAlertHidden = false;

    //esto aca no va
    if (objectToDelete instanceof Monitor) {
      console.log('Deleting Monitor:', objectToDelete);
    } else if (objectToDelete instanceof Activity) {
      console.log('Deleting Activity:', objectToDelete);
    }
  }

}

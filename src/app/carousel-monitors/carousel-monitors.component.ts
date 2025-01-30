import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitorsService } from '../services/monitors.service';
import { Monitor } from '../models/monitor';
import { MonitorCardComponent } from "../monitor-card/monitor-card.component";
import { FormMonitorComponent } from "../form-monitor/form-monitor.component";
import { DeleteAlertComponent } from "../delete-alert/delete-alert.component";
@Component({
  selector: 'app-carousel-monitors',
  imports: [CommonModule, MonitorCardComponent, FormMonitorComponent, DeleteAlertComponent],
  templateUrl: './carousel-monitors.component.html',
  styleUrl: './carousel-monitors.component.scss'
})
export class CarouselMonitorsComponent {

  allMonitors!: Monitor[];

  constructor(private monitorsService: MonitorsService){
    this.allMonitors = this.monitorsService.monitorsList;
  }

  currentSlide = 0; // Índice del primer grupo visible
  imagesPerSlide = 3; // Número de imágenes visibles a la vez

  get visibleMonitors() {
    if (this.allMonitors.length <= this.imagesPerSlide) {
      return this.allMonitors.slice(0);
    }

    if (this.currentSlide + this.imagesPerSlide > this.allMonitors.length) {
      return this.allMonitors.slice(this.allMonitors.length - this.imagesPerSlide);
    }

    return this.allMonitors.slice(this.currentSlide, this.currentSlide + this.imagesPerSlide);
  }

  nextSlide() {
    if (this.currentSlide + this.imagesPerSlide < this.allMonitors.length) {
      this.currentSlide += this.imagesPerSlide;
    } else {
      this.currentSlide = this.allMonitors.length - this.imagesPerSlide;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide -= this.imagesPerSlide;
    }
  }


  isFormMonitorHidden = true;
  monitorToEdit: [number, Monitor] | undefined;

  showFormMonitor(monitorData?: [number, Monitor]) {
    this.isFormMonitorHidden = false;
    
    if(monitorData !== undefined) {
      this.monitorToEdit = monitorData;
      return;
    }

    this.monitorToEdit = undefined;
  }


  
  isDeleteAlertHidden = true;
  indexMonitorAEliminar!: number;
  showDeleteAlert(monitorIndex: number) {
    this.isDeleteAlertHidden = false;
    this.indexMonitorAEliminar = monitorIndex;
  }

}

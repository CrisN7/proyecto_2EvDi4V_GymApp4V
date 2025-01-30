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

  allMonitors!: Monitor[];

  constructor(private monitorsService: MonitorsService){
    this.allMonitors = this.monitorsService.monitorsList;

    // Ahora puedes suscribirte al ReplaySubject
    //this.monitorsService.monitorsSubject$.subscribe(monitors => {
      //this.allMonitors = monitors
    //});
  }

  currentSlide = 0; // Índice del primer grupo visible
  imagesPerSlide = 3; // Número de imágenes visibles a la vez


  // get visibleMonitors() {
  //   // Si el grupo visible se sale del array, ajusta el índice para retroceder
  //   if (this.currentSlide + this.imagesPerSlide > this.allMonitors.length) {
  //     //return this.allMonitors.slice(this.allMonitors.length - this.imagesPerSlide);
  //     let tempArray = this.allMonitors.slice(this.allMonitors.length - this.imagesPerSlide);
  //     console.log(tempArray);
  //     return tempArray;
  //   }
    
  //   return this.allMonitors.slice(
  //     this.currentSlide,
  //     this.currentSlide + this.imagesPerSlide
  //   );
  // }












  get visibleMonitors() {
    // Si hay menos elementos que imagesPerSlide, mostrar todos sin eliminar el primero
    if (this.allMonitors.length <= this.imagesPerSlide) {
      return this.allMonitors.slice(0); // Mostrar todos si hay menos de imagesPerSlide
    }

    // Si el grupo visible se sale del array, ajusta el índice
    if (this.currentSlide + this.imagesPerSlide > this.allMonitors.length) {
      return this.allMonitors.slice(this.allMonitors.length - this.imagesPerSlide);
    }

    return this.allMonitors.slice(this.currentSlide, this.currentSlide + this.imagesPerSlide);
  }

  nextSlide() {
    // Evita avanzar si no hay más slides completos disponibles
    if (this.currentSlide + this.imagesPerSlide < this.allMonitors.length) {
      this.currentSlide += this.imagesPerSlide;
    } else {
      // Si al sumar imagesPerSlide nos pasamos, ajustamos para el último grupo
      this.currentSlide = this.allMonitors.length - this.imagesPerSlide;
    }
  }

  prevSlide() {
    // Asegura que el índice no sea negativo
    if (this.currentSlide > 0) {
      this.currentSlide -= this.imagesPerSlide;
    }
  }













  // nextSlide() {
  //   if (this.currentSlide + this.imagesPerSlide < this.allMonitors.length) {
  //     this.currentSlide += this.imagesPerSlide;
  //   }
  // }

  // prevSlide() {
  //   if (this.currentSlide > 0) {
  //     this.currentSlide -= this.imagesPerSlide;
  //   }
  // }


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

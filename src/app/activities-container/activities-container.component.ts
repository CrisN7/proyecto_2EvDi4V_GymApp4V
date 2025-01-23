import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivityComponent } from "../activity/activity.component";
import { DateRangeDescriptor, DateRangeType, IgxCalendarComponent } from 'igniteui-angular';
import { CommonModule } from '@angular/common';
import { ComponentsCommunicationService } from '../services/components-communication.service';


@Component({
  selector: 'app-activities-container',
  imports: [ActivityComponent, IgxCalendarComponent, CommonModule],
  templateUrl: './activities-container.component.html',
  styleUrl: './activities-container.component.scss'
})
export class ActivitiesContainerComponent {

  disabledDates: DateRangeDescriptor[];
  currentDate: Date = new Date();
  fechaActualEspanol: string = this.currentDate.toLocaleDateString('es-ES', {
    year: 'numeric', // Año
    month: 'long',   // Mes en texto
    day: 'numeric',  // Día del mes
  }).replaceAll("de ", "");

  constructor(private communicationService: ComponentsCommunicationService) {
    // Configurar las fechas deshabilitadas
    this.currentDate.setHours(0, 0, 0, 0); // Asegurar que no haya horas en la comparación
    this.disabledDates = [
      {
        type: DateRangeType.Before, // Tipo de rango "Antes de"
        dateRange: [this.currentDate],   // Fechas hasta hoy (exclusivo)
      },
    ];

  }

  sendSelectedDate(selectedDate: Date | Date[]){

    if(selectedDate instanceof Date){
      this.currentDate = selectedDate;
      this.fechaActualEspanol = selectedDate.toLocaleDateString('es-ES', {
        year: 'numeric', // Año
        month: 'long',   // Mes en texto
        day: 'numeric',  // Día del mes
      }).replaceAll("de ", "");
      console.log(this.fechaActualEspanol);
      console.log(selectedDate); 

      this.communicationService.sendDate(this.currentDate);
    }
    
  }


}

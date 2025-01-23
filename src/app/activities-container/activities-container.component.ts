import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivityComponent } from "../activity/activity.component";
import { DateRangeDescriptor, DateRangeType, IgxCalendarComponent } from 'igniteui-angular';
import { CommonModule } from '@angular/common';
import { ComponentsCommunicationService } from '../services/components-communication.service';
import { ActivitiesGroupedByDateService } from '../services/activities-grouped-by-date.service';


@Component({
  selector: 'app-activities-container',
  imports: [ActivityComponent, IgxCalendarComponent, CommonModule],
  templateUrl: './activities-container.component.html',
  styleUrl: './activities-container.component.scss'
})
export class ActivitiesContainerComponent implements OnInit{

  disabledDates: DateRangeDescriptor[];
  currentDate: Date = new Date();
  fechaActualEspanol: string = this.currentDate.toLocaleDateString('es-ES', {
    year: 'numeric', // Año
    month: 'long',   // Mes en texto
    day: 'numeric',  // Día del mes
  }).replaceAll("de ", "");

  constructor(private communicationService: ComponentsCommunicationService, private savedActivitiesService: ActivitiesGroupedByDateService) {
    // Configurar las fechas deshabilitadas
    this.currentDate.setHours(0, 0, 0, 0); // Asegurar que no haya horas en la comparación
    this.disabledDates = [
      {
        type: DateRangeType.Before, // Tipo de rango "Antes de"
        dateRange: [this.currentDate],   // Fechas hasta hoy (exclusivo)
      },
    ];
  }

  ngOnInit(){

  }

  //dateToSend: Date | Date [] = new Date();

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
      console.log(selectedDate.toString());
  

      //this.communicationService.sendDate(this.currentDate);
    }
    
  }


}

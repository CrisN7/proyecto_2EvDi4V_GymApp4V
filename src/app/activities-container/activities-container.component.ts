import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, OnInit, ViewChild } from '@angular/core';
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
export class ActivitiesContainerComponent {

  disabledDates: DateRangeDescriptor[];
  currentDate: Date = new Date();
  fechaActualEspanol: string = this.currentDate.toLocaleDateString('es-ES', {
    year: 'numeric', // Año
    month: 'long',   // Mes en texto
    day: 'numeric',  // Día del mes
  }).replaceAll("de ", "");

  constructor(private communicationService: ComponentsCommunicationService, private savedActivitiesService: ActivitiesGroupedByDateService, private cdr: ChangeDetectorRef) {
    
    // Configurar las fechas deshabilitadas
    this.currentDate.setHours(0, 0, 0, 0); // Asegurar que no haya horas en la comparación
    this.disabledDates = [
      {
        type: DateRangeType.Before,//Tipo de rango "Antes de"
        dateRange: [this.currentDate],//Fechas hasta hoy (exclusivo)
      },
    ];
  }

  showCalendar: boolean = true;

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



  changeDate(direction: string) {
    const newDate = new Date(this.currentDate);

    if (direction === 'previous') {
      newDate.setDate(newDate.getDate() - 1); // Resta un día
    } else if (direction === 'next') {
      newDate.setDate(newDate.getDate() + 1); // Suma un día
    }

    this.currentDate = newDate; // Actualiza el calendario

    this.fechaActualEspanol = this.currentDate.toLocaleDateString('es-ES', {
      year: 'numeric', // Año
      month: 'long',   // Mes en texto
      day: 'numeric',  // Día del mes
    }).replaceAll("de ", "");

    // 🔥 🔄 Se oculta y vuelve a mostrar el calendario para forzar la actualización
    this.showCalendar = false;
    setTimeout(() => {
      this.showCalendar = true;
    });
  }

}

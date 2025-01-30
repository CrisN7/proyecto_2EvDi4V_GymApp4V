import { Component} from '@angular/core';
import { ActivityComponent } from "../activity/activity.component";
import { DateRangeDescriptor, DateRangeType, IgxCalendarComponent } from 'igniteui-angular';
import { CommonModule } from '@angular/common';


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

  constructor() {
    
    //Configuramo las fechas deshabilitadas
    this.currentDate.setHours(0, 0, 0, 0);
    this.disabledDates = [
      {
        type: DateRangeType.Before,
        dateRange: [this.currentDate],
      },
    ];
  }

  showCalendar: boolean = true;

  sendSelectedDate(selectedDate: Date | Date[]){

    if(selectedDate instanceof Date){
      this.currentDate = selectedDate;
      this.fechaActualEspanol = selectedDate.toLocaleDateString('es-ES', {
        year: 'numeric', //Año
        month: 'long',   //Mes en texto
        day: 'numeric',  //Día del mes
      }).replaceAll("de ", "");
    }
  }



  changeDate(direction: string) {
    const newDate = new Date(this.currentDate);

    if (direction === 'previous') {
      newDate.setDate(newDate.getDate() - 1); // Resta un día
    } else if (direction === 'next') {
      newDate.setDate(newDate.getDate() + 1); // Suma un día
    }

    this.currentDate = newDate;

    this.fechaActualEspanol = this.currentDate.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric',  
    }).replaceAll("de ", "");

    this.showCalendar = false;
    setTimeout(() => {
      this.showCalendar = true;
    });
  }

}

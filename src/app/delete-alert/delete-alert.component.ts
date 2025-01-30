import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivitiesGroupedByDateService } from '../services/activities-grouped-by-date.service';
import { MonitorsService } from '../services/monitors.service';

@Component({
  selector: 'app-delete-alert',
  imports: [],
  templateUrl: './delete-alert.component.html',
  styleUrl: './delete-alert.component.scss'
})
export class DeleteAlertComponent {

  //Esta variable puede recibir su valor tanto del activityComponent o del carouselMonitorsComponent
  @Input() mensajeDeObjetoAEliminar!: string;

  constructor(private savedActivitiesService: ActivitiesGroupedByDateService, private monitorsService: MonitorsService){
    
  }

  @Output() closeDeleteAlertEventEmitter = new EventEmitter<boolean>();
  closeDeleteAlert() {
    this.closeDeleteAlertEventEmitter.emit(true);
  }



  //Esta variable puede recibir su valor tanto del activityComponent o del carouselMonitorsComponent
  @Input() objetoAEliminar: string = "";

  //Esta variable son los keys son para eliminar una actividad, su valor solo puede ser recibido desde el activityComponent
  @Input() keysToDeleteActivity: string[] = [];

  //Su valor solo puede ser recibido desde el carouselMonitorsComponent
  @Input() indexMonitorAEliminar!: number;

  deleteActivity() {


    if(this.objetoAEliminar == "Activity"){
      this.savedActivitiesService.deleteActivityFromDate(this.keysToDeleteActivity[0], this.keysToDeleteActivity[1]);
      this.closeDeleteAlertEventEmitter.emit(true);
      return;
    }

    if(this.objetoAEliminar == "Monitor"){
      this.monitorsService.deleteMonitor(this.indexMonitorAEliminar);
      this.closeDeleteAlertEventEmitter.emit(true);
      return;
    }

   
  }
}

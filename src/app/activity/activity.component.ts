import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Activity } from '../models/activity';
import { ActivitiesService } from '../services/activities.service';
import {AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormAddActivityComponent } from "../form-add-activity/form-add-activity.component";
import { DeleteAlertComponent } from "../delete-alert/delete-alert.component";
import { ComponentsCommunicationService } from '../services/components-communication.service';
import { ActivitiesGroupedByDateService } from '../services/activities-grouped-by-date.service';


@Component({
  selector: 'app-activity',
  imports: [AsyncPipe, CommonModule, FormAddActivityComponent, DeleteAlertComponent],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})

export class ActivityComponent implements OnChanges{

  isFormHidden: boolean = true;
  isDeleteAlertHidden: boolean = true;
  activitySentToEdit: Activity | undefined;//Si el componente padre y el hijo se crean al mismo tiempo, y el padre(osea este componente que seria el padre del form-add-activity) inicializa el valor del @Input (por ejemplo, directamente en su plantilla o lógica), Angular detectará esa asignación inicial y ejecutará el método ngOnChanges del hijo una vez para reflejar el valor inicial recibido.
  selectedDate: Date = new Date();

  @Input() receivedDate: Date = new Date();
  activitiesOfTheDay2;

  constructor(private activitiesService: ActivitiesService, private communicationService: ComponentsCommunicationService, private savedActivitiesService: ActivitiesGroupedByDateService) {//TODO no entiendo porque en el template me deja usar los valores de activiesOfTheDay si no los he inicializado porque en ningun momento use este constructor

    this.communicationService.selectedDateObservable$.subscribe((emittedDate) => {this.selectedDate = emittedDate;} );//el emittedDate es el valor emitido por el observable

    this.receivedDate.setHours(0,0,0);
    this.activitiesOfTheDay2 = this.savedActivitiesService.getActivitiesFromDate(this.receivedDate);

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.activitiesOfTheDay2 = this.savedActivitiesService.getActivitiesFromDate(this.receivedDate);
  }






  keysToDeleteActivity: string[] = []; 
  //keyNumberActivity: string = "";
  showDeleteAlert(keyNumberActivity: string){
    this.isDeleteAlertHidden = false;
    //this.keyNumberActivity = keyNumberActivity;

    this.keysToDeleteActivity.length = 0;//Limpiamos el array para que no se nos acumulen los keys(fecha unica, y numero de actividad unico) de cada actividad
    this.keysToDeleteActivity.push(this.receivedDate.toString(), keyNumberActivity);
    console.log(this.receivedDate.toString());
    console.log(keyNumberActivity);
  }









  activityKey: string = "";
  showActivityForm(activityKey: string, activity?: Activity) {//Declaramos un parámetro opcional utilizando el operador ?. Deben estar al final de la lista de parámetros, después de los obligatorios. Si no se proporciona un parámetro opcional, su valor por defecto será UNDEFINED dentro de la función
    this.isFormHidden = false;

    this.activityKey = activityKey;

    console.log("fuera del if del act comp " +this.activitySentToEdit);
    if(activityKey !== undefined && activity !== undefined) {
      console.log("dentro del if del act comp " + this.activitySentToEdit);
      this.activitySentToEdit = activity;
      return;
    }
    
    this.activitySentToEdit = undefined;
  }
}

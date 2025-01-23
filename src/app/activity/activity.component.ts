import { Component } from '@angular/core';
import { Activity } from '../models/activity';
import { ActivitiesService } from '../services/activities.service';
import {AsyncPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormAddActivityComponent } from "../form-add-activity/form-add-activity.component";
import { DeleteAlertComponent } from "../delete-alert/delete-alert.component";


@Component({
  selector: 'app-activity',
  imports: [AsyncPipe, CommonModule, FormAddActivityComponent, DeleteAlertComponent],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})

export class ActivityComponent {

  activitiesOfTheDay: { [clave: string]: Activity } = {};//Indica que activitiesOfTheDay es un objeto cuyas claves son de tipo string (lo que está dentro de los corchetes []) y cuyos valores son de tipo Activity.
  isFormHidden: boolean = true;
  isDeleteAlertHidden: boolean = true;
  activitySentToEdit: Activity | undefined;//Si el componente padre y el hijo se crean al mismo tiempo, y el padre(osea este componente que seria el padre del form-add-activity) inicializa el valor del @Input (por ejemplo, directamente en su plantilla o lógica), Angular detectará esa asignación inicial y ejecutará el método ngOnChanges del hijo una vez para reflejar el valor inicial recibido.

  constructor(private activitiesService: ActivitiesService) {//TODO no entiendo porque en el template me deja usar los valores de activiesOfTheDay si no los he inicializado porque en ningun momento use este constructor

    this.activitiesOfTheDay["firstActivity"] = activitiesService.activitiesList[0];
    //this.activitiesOfTheDay["secondActivity"] = activitiesService.activitiesList[1];
    this.activitiesOfTheDay["thirdActivity"] = activitiesService.activitiesList[2];
  }

  showDeleteAlert(){
    this.isDeleteAlertHidden = false;
  }


  showActivityForm(activity?: Activity) {//Declaramos un parámetro opcional utilizando el operador ?. Deben estar al final de la lista de parámetros, después de los obligatorios. Si no se proporciona un parámetro opcional, su valor por defecto será UNDEFINED dentro de la función
    this.isFormHidden = false;

    console.log("fuera del if del act comp " +this.activitySentToEdit);
    if( activity !== undefined) {
      console.log("dentro del if del act comp " + this.activitySentToEdit);
      this.activitySentToEdit = activity;
      return;
    }
    
    this.activitySentToEdit = undefined;
  }
}

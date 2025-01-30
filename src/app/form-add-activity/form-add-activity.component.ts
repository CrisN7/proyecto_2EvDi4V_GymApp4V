import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ActivitiesService } from '../services/activities.service';
import { Activity } from '../models/activity';
import { CommonModule } from '@angular/common';
import { Monitor } from '../models/monitor';
import { MonitorsService } from '../services/monitors.service';
import { ComponentsCommunicationService } from '../services/components-communication.service';
import { ActivitiesGroupedByDateService } from '../services/activities-grouped-by-date.service';


@Component({
  selector: 'app-form-add-activity',
  imports: [ CommonModule],
  templateUrl: './form-add-activity.component.html',
  styleUrl: './form-add-activity.component.scss'
})
export class FormAddActivityComponent implements OnChanges, AfterViewInit, OnInit {

  allActivities: Activity[];
  allMonitors: Monitor[];
  selectedDate: Date = new Date();

  constructor(private activitiesService: ActivitiesService, private monitorsService: MonitorsService, private communicationService: ComponentsCommunicationService, private savedActivitiesService: ActivitiesGroupedByDateService) { 
    this.allActivities = this.activitiesService.activitiesList;
    this.allMonitors = monitorsService.monitorsList;
  }

  ngOnInit(): void {
    this.communicationService.selectedDateObservable$.subscribe((emittedDate) => {this.selectedDate = emittedDate;} );//el emittedDate es el valor emitido por el observable
  }


  @Input() activityToEdit: Activity | undefined;
  //Esto no es buena practica segun chatgpt TODO
  //let activitySelectOptions: HTMLOptionsCollection = (document.getElementById('activitySelect') as HTMLSelectElement).options;
  //let monitorSelect1Options: HTMLOptionsCollection = (document.getElementById('monitorSelect1') as HTMLSelectElement).options;
  //let monitorSelect2Options: HTMLOptionsCollection = (document.getElementById('monitorSelect2') as HTMLSelectElement).options;

  @ViewChild('activitySelect') activitySelect!: ElementRef<HTMLSelectElement>;
  @ViewChild('monitorSelect1') monitorSelect1!: ElementRef<HTMLSelectElement>; 
  @ViewChild('monitorSelect2') monitorSelect2!: ElementRef<HTMLSelectElement>;
  isViewInitialized = false;

  ngOnChanges(changes: SimpleChanges): void {//Este método se ejecuta automáticamente cuando cambia un valor en una propiedad decorada con @Input.
    console.log("onchanges del form ts: " + this.activityToEdit);
    
    if (this.activityToEdit !== undefined && this.isViewInitialized) {

      let activitySelectOptions = this.activitySelect.nativeElement.options;
      let monitorSelect1Options = this.monitorSelect1.nativeElement.options;
      let monitorSelect2Options = this.monitorSelect2.nativeElement.options;

      for(let i = 0; i < activitySelectOptions.length; i++) {

        if(activitySelectOptions[i].value === "") {
          activitySelectOptions[i].hidden = true;
        }

        if(activitySelectOptions[i].value === this.activityToEdit.name) {
          activitySelectOptions[i].selected = true;
        }
      }

      for(let i = 0; i < monitorSelect1Options.length; i++) {

        if(monitorSelect1Options[i].value === "") {
          monitorSelect1Options[i].hidden = true;
        }

        if(monitorSelect1Options[i].value === this.activityToEdit.monitors[0].name) {
          monitorSelect1Options[i].selected = true;
        }
      }

      if(this.activityToEdit.monitors[1] === undefined) {
        for(let i = 0; i < monitorSelect2Options.length; i++) {

          if(monitorSelect2Options[i].value === "") {
            monitorSelect2Options[i].hidden = false;
            monitorSelect2Options[i].selected = true;
          }
        }

        return;
      }

      for(let i = 0; i < monitorSelect2Options.length; i++) {

        if(monitorSelect2Options[i].value === "") {
          monitorSelect2Options[i].hidden = true;
        }

        if(monitorSelect2Options[i].value === this.activityToEdit.monitors[1]?.name) {
          monitorSelect2Options[i].selected = true;
        }
      }

      
    }

    if (this.activityToEdit == undefined && this.isViewInitialized) {
      let activitySelectOptions = this.activitySelect.nativeElement.options;
      let monitorSelect1Options = this.monitorSelect1.nativeElement.options;
      let monitorSelect2Options = this.monitorSelect2.nativeElement.options;

      for(let i = 0; i < activitySelectOptions.length; i++) {

        if(activitySelectOptions[i].value === "") {
          activitySelectOptions[i].hidden = false;
          activitySelectOptions[i].selected = true;
        }
      }

      for(let i = 0; i < monitorSelect1Options.length; i++) {

        if(monitorSelect1Options[i].value === "") {
          monitorSelect1Options[i].hidden = false;
          monitorSelect1Options[i].selected = true;
        }
      }

      for(let i = 0; i < monitorSelect2Options.length; i++) {

        if(monitorSelect2Options[i].value === "") {
          monitorSelect2Options[i].hidden = false;
          monitorSelect2Options[i].selected = true;
        }
      }
    }
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
  }

  activitiesGroupedByDate: { [keyUniqueDate: string]: {[keyNumberActivity: string]: Activity} } = {};
  @Input() activityKey: string = ""; 
  @Input() receivedDate: Date = new Date();
  saveActivity() {

    const activitySelectOptions = this.activitySelect.nativeElement.options;
    const monitor1SelectOptions = this.monitorSelect1.nativeElement.options;
    const monitor2SelectOptions = this.monitorSelect2.nativeElement.options;

    let errorMessage: string = "";

    //Recuperamos el Tipo de la actividad seleccionada
    if(this.activitySelect.nativeElement.value == ""){
      errorMessage += "Selecciona una actividad.";
    }
    let activitySelected = this.activitySelect.nativeElement.value;

    //Recuperamos el primer Monitor seleccionado
    if(this.allMonitors[monitor1SelectOptions.selectedIndex - 1] == undefined){//Le resto 1 porque tengo un option demás en cada select. selectedIndex: Es una propiedad nativa del elemento <select> que devuelve el índice del <option> seleccionado.
      errorMessage += "Selecciona al menos un monitor.";
    }
    let monitor1Selected: Monitor = this.allMonitors[monitor1SelectOptions.selectedIndex - 1];

    if(errorMessage !== ""){
      return;
    }

    //Recuperamos el segundo Monitor seleccionado
    if(this.allMonitors[monitor2SelectOptions.selectedIndex - 1] == undefined){//Le resto 1 porque tengo un option demás en cada select. selectedIndex: Es una propiedad nativa del elemento <select> que devuelve el índice del <option> seleccionado.
      errorMessage += "Selecciona un segundo monitor.";
    }
    let monitor2Selected: Monitor = this.allMonitors[monitor2SelectOptions.selectedIndex - 1];

    let savedActivity: Activity = new Activity(
      activitySelected,
      this.allActivities[activitySelectOptions.selectedIndex - 1].img,//Le resto 1 porque tengo un option demás en cada select. selectedIndex: Es una propiedad nativa del elemento <select> que devuelve el índice del <option> seleccionado.
      monitor2Selected ? [monitor1Selected, monitor2Selected] : [monitor1Selected]//Condición para incluir monitor2Selected si no es undefined
    );

    this.savedActivitiesService.addActivityFromDate(this.receivedDate, this.activityKey, savedActivity);

    this.closeFormEventEmitter.emit(true);//El método emit() de EventEmitter se usa para enviar un evento desde el hijo hacia el padre. Cuando llamas a emit(), estás "disparando" el evento y, opcionalmente, puedes incluir un valor que se envía al componente padre.
  }


  /*
    @Output() es un DECORADOR en Angular que marca una propiedad de un componente hijo(osea este componente) como un EMISOR DE EVENTOS, es decir declaramos closeFormEvent como un emisor de eventos. Esto permite que el componente hijo pueda notificar eventos al componente padre.
  */
  @Output() closeFormEventEmitter = new EventEmitter<boolean>();
  closeFormActivity() {
    this.closeFormEventEmitter.emit(true);//El método emit() de EventEmitter se usa para enviar un evento desde el hijo hacia el padre. Cuando llamas a emit(), estás "disparando" el evento y, opcionalmente, puedes incluir un valor que se envía al componente padre.
  }
}



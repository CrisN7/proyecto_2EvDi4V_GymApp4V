import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges,  } from '@angular/core';
import { Monitor } from '../models/monitor';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MonitorsService } from '../services/monitors.service';


@Component({
  selector: 'app-form-monitor',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-monitor.component.html',
  styleUrl: './form-monitor.component.scss'
})
export class FormMonitorComponent implements OnChanges{

  @Input() monitorToEdit: [number, Monitor] | undefined;

  //manejar la var de arriba para el form
  name = new FormControl("", [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  telephoneNumber = new FormControl('', [Validators.required]);

  constructor(private monitorService: MonitorsService){

  }


  ngOnChanges(changes: SimpleChanges): void {
    
    if(this.monitorToEdit !== undefined) {
      this.name.setValue(this.monitorToEdit[1].name);
      this.email.setValue(this.monitorToEdit[1].email);
      this.telephoneNumber.setValue(this.monitorToEdit[1].telephoneNumber);

    }
  }


  saveMonitor(indexMonitor?: number) {
    //Verificamos si los valores no son nulos o vacíos
    if (
      this.name.valid &&
      this.email.valid &&
      this.telephoneNumber.valid &&
      this.name.value !== null && this.name.value.trim() !== '' &&
      this.email.value !== null && this.email.value.trim() !== '' &&
      this.telephoneNumber.value !== null && this.telephoneNumber.value.trim() !== ''
    ) {
      let newMonitor = new Monitor();
  
      //Asignamos los valores del formulario al objeto Monitor
      newMonitor.name = this.name.value!;
      newMonitor.email = this.email.value!;
      newMonitor.telephoneNumber = this.telephoneNumber.value!;


      if(indexMonitor !== undefined){
        this.monitorService.editMonitor(indexMonitor, newMonitor);
      } else {
        this.monitorService.addMonitor(newMonitor);
      }

      this.name.reset();
      this.email.reset();
      this.telephoneNumber.reset();
      this.closeFormEventEmitter.emit(true);
    }
  }


  @Output() closeFormEventEmitter = new EventEmitter<boolean>();
  closeFormMonitor() {
    this.name.reset();
    this.email.reset();
    this.telephoneNumber.reset();
    this.closeFormEventEmitter.emit(true);
  }
}

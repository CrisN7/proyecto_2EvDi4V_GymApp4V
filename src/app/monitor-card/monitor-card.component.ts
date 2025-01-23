import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Monitor } from '../models/monitor';
import { MonitorsService } from '../services/monitors.service';
import { CommonModule } from '@angular/common';
import { FormMonitorComponent } from "../form-monitor/form-monitor.component";
import { DeleteAlertComponent } from "../delete-alert/delete-alert.component";
import { Activity } from '../models/activity';

@Component({
  selector: 'app-monitor-card',
  imports: [CommonModule, FormMonitorComponent, DeleteAlertComponent],
  templateUrl: './monitor-card.component.html',
  styleUrl: './monitor-card.component.scss'
})
export class MonitorCardComponent {

  @Input() monitorReceived!: Monitor;
  i: number = 1;

  //allMonitors: Monitor[];
  constructor(private monitorsService: MonitorsService) { 
    //this.allMonitors = monitorsService.monitorsList;
    console.log("numero " + this.i + " monitor-> " + this.monitorReceived);
    this.i++;
  }

  isDeleteAlertHidden = true;
  showDeleteAlert(objectToDelete: Monitor | Activity) {
    this.isDeleteAlertHidden = false;

    //esto aca no va
    if (objectToDelete instanceof Monitor) {
      console.log('Deleting Monitor:', objectToDelete);
    } else if (objectToDelete instanceof Activity) {
        console.log('Deleting Activity:', objectToDelete);
    }
  }

  isFormMonitorHidden = true;
  monitorSentToEdit: Monitor | undefined;
  showFormMonitor(Monitor?: Monitor) {
    this.isFormMonitorHidden = false;
    
    if(Monitor !== undefined) {
      this.monitorSentToEdit = Monitor;
      return;
    }

    this.monitorSentToEdit = undefined;
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Monitor } from '../models/monitor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monitor-card',
  imports: [CommonModule],
  templateUrl: './monitor-card.component.html',
  styleUrl: './monitor-card.component.scss'
})
export class MonitorCardComponent {

  @Input() monitorReceived!: Monitor;
  @Input() monitorIndex!: number;


  monitorToEdit: [number, Monitor] = [0, new Monitor()];
  
  @Output() showMonitorFormEventEmitter = new EventEmitter<[number, Monitor]>();
  showMonitorForm(monitorToEdit: [number, Monitor]) {
    this.showMonitorFormEventEmitter.emit(monitorToEdit);
  }

  @Output() showDeleteAlertEventEmitter = new EventEmitter<number>();
  showDeleteAlert(monitorIndex: number) {
    this.showDeleteAlertEventEmitter.emit(monitorIndex);
  }
}

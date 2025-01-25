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
  constructor() { 
  }

  @Output() showMonitorFormEventEmitter = new EventEmitter<Monitor>();
  showMonitorForm(monitor: Monitor) {
    this.showMonitorFormEventEmitter.emit(monitor);
  }

  @Output() showDeleteAlertEventEmitter = new EventEmitter<Monitor>();
  showDeleteAlert(monitor: Monitor) {
    this.showDeleteAlertEventEmitter.emit(monitor);
  }
}

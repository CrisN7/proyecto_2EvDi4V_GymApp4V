import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Monitor } from '../models/monitor';

@Component({
  selector: 'app-form-monitor',
  imports: [],
  templateUrl: './form-monitor.component.html',
  styleUrl: './form-monitor.component.scss'
})
export class FormMonitorComponent {

  @Input() monitorToEdit: Monitor | undefined;

  @Output() closeFormEventEmitter = new EventEmitter<boolean>();
  closeFormMonitor() {
    this.closeFormEventEmitter.emit(true);
  }
}

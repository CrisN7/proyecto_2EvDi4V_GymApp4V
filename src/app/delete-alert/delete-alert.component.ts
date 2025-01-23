import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-alert',
  imports: [],
  templateUrl: './delete-alert.component.html',
  styleUrl: './delete-alert.component.scss'
})
export class DeleteAlertComponent {

  @Output() closeDeleteAlertEventEmitter = new EventEmitter<boolean>();
  closeDeleteAlert() {
    this.closeDeleteAlertEventEmitter.emit(true);
  }

  deleteActivity() {
    console.log("Activity deleted");
  }
}

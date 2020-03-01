import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  @Output() closeModalEvent: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(
    private matDialogRef: MatDialogRef<ModalWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.matDialogRef.close();
    this.closeModalEvent.emit(true);
  }

}

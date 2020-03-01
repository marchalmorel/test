import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../services/data.service";
import {CheckContainerNumberService} from "../services/check-container-number.service";
import {containerHistory, containerInfo} from "../interfaces/interfaces";
import {MatDialog} from "@angular/material/dialog";
import {ModalWindowComponent} from "../modal-window/modal-window.component";

@Component({
  selector: 'app-container-search',
  templateUrl: './container-search.component.html',
  styleUrls: ['./container-search.component.scss']
})
export class ContainerSearchComponent implements OnInit {
  displayedColumns: string[] = ['dateFrom', 'dateTo', 'sourcePort', 'destinationPort', 'sender', 'recipient'];
  form: FormGroup;
  containerInfo: containerInfo;
  containerHistory: containerHistory[];

  constructor(
    private dataService: DataService,
    private checkContainerNumberService : CheckContainerNumberService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      containerNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Z]{4}[0-9]{7}')
      ])
    })
  }

  getContainerInformation() {
    const containerNumber = this.form.get('containerNumber').value;
    const isNumberTrue = this.checkContainerNumberService.checkContainerNumber(containerNumber.split(''));

    if (this.form.invalid || !isNumberTrue) {
      return this.dialog.open(ModalWindowComponent, {data: {text: 'Номер контейнера указан не верно!'}})
    }

    this.dataService.getContainerInformation(containerNumber).subscribe((response: containerInfo) => {
      this.containerInfo = response;
      this.containerHistory = response.history;
    })
  }


}

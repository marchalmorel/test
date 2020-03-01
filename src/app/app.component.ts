import {Component, OnInit} from '@angular/core';
import {SpinnerService} from "./services/spinner.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  doesSpinnerWork = false;

  constructor(
    private spinnerService: SpinnerService
  ) {}

  getSpinner() {
    this.spinnerService.getSpinner().subscribe(spinnerStatus => {
      this.doesSpinnerWork = spinnerStatus;
    });
  }

  ngOnInit() {
    this.getSpinner();
  }
}

import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private subject = new Subject();

  constructor() { }

  spinnerState(doesSpinnerWork: boolean) {
    this.subject.next(doesSpinnerWork);
  }

  getSpinner(): Observable<any> {
    return this.subject.asObservable();
  }
}

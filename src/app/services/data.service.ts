import { Injectable } from '@angular/core';
import {CheckContainerNumberService} from "./check-container-number.service";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {SpinnerService} from "./spinner.service";
import {catchError, finalize, timeout} from "rxjs/operators";
import {containerInfo} from "../interfaces/interfaces";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private checkContainerNumberService: CheckContainerNumberService,
    private http: HttpClient,
    private spinner: SpinnerService
  ) { }

  httpWrapper(obs: Observable<any>): Observable<any> {
    this.spinner.spinnerState(true);

    return obs.pipe(
      timeout(15000),
      catchError((error) => {
        return throwError(error);
      }),
      finalize(() => {
        return this.spinner.spinnerState(false);
      })
    )
  }

  getContainerInformation(containerNumber: string): Observable<containerInfo> {
      return this.httpWrapper(this.http.get(`http://www.mocky.io/v2/5ddbad8a3400005200eadd4a?numer=${containerNumber}`))
    }

}

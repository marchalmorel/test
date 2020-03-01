import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ContainerSearchComponent } from './container-search/container-search.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerSearchComponent,
    ModalWindowComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalWindowComponent]
})
export class AppModule { }

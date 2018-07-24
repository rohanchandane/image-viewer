import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ModalContentComponent } from './viewer/modal-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewerComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    ModalModule.forRoot()
  ],
  entryComponents: [
    ModalContentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

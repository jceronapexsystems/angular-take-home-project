import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { CrudMainComponent } from './components/crud-main.component';
import { CrudTableComponent } from './components/crud-table/crud-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudMainComponent,
    CrudFormComponent,
    CrudTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

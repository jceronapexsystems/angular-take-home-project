import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrudTableComponentComponent } from './components/crud-main-component/components/crud-table-component/crud-table-component.component';
import { CrudMainComponentComponent } from './components/crud-main-component/crud-main-component.component';
import { CrudFormComponentComponent } from './components/crud-main-component/components/crud-form-component/crud-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudMainComponentComponent,
    CrudTableComponentComponent,
    CrudFormComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

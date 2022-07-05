import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-form-component',
  templateUrl: './crud-form-component.component.html',
  styleUrls: ['./crud-form-component.component.css']
})
export class CrudFormComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitClick() {
    console.log('eda');
  }

}

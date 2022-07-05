import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/models/book-model';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-crud-table-component',
  templateUrl: './crud-table-component.component.html',
  styleUrls: ['./crud-table-component.component.css']
})
export class CrudTableComponentComponent implements OnInit {

  constructor(private bookService: BookServiceService) { }

  data!: BookModel[];

  ngOnInit(): void {
    this.data = this.bookService.getList();
  }

  onDeleteClick(item: BookModel) {
    alert('Not implemented');
  }

}

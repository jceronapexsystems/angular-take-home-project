import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/models/book-model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: []
})
export class CrudTableComponent implements OnInit {
  constructor(private bookService: BookService) { }

  books!: BookModel[];

  ngOnInit(): void {
    this.books = this.bookService.getList();
  }

  onDeleteClick(item: BookModel) {
    // TODO: Implement
    alert('Not implemented');
  }

  onUpdateClick(item: BookModel) {
    // TODO: Implement
    alert('Not implemented');
  }
}

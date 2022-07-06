import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/models/book-model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.css']
})
export class CrudTableComponent implements OnInit {
  constructor(private bookService: BookService) { }

  data!: BookModel[];

  ngOnInit(): void {
    this.data = this.bookService.getList();
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

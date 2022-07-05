import { Component, OnInit } from '@angular/core';

export class BookModel {
  isbn!: string;
  bookName!: string;
  authorName!: string;
  publishDate!: Date;
  language!: string;
  editorialName!: string;
}

@Component({
  selector: 'app-crud-table-component',
  templateUrl: './crud-table-component.component.html',
  styleUrls: ['./crud-table-component.component.css']
})
export class CrudTableComponentComponent implements OnInit {

  constructor() { }

  data!: BookModel[];

  ngOnInit(): void {
    this.data = [{
      authorName: "William Shakespeare",
      bookName: "Romeo and Juliet",
      editorialName: "Mirahadas editorial",
      isbn: "1",
      language: "en-US",
      publishDate: new Date('1597-01-01')
    }, {
      authorName: "Shakespierre",
      bookName: "Romeo and Julieta",
      editorialName: "Errata Naturae editorial",
      isbn: "2",
      language: "en-MX",
      publishDate: new Date('1597-01-01')
    }];
  }

  onDeleteClick(item: BookModel) {
    alert('Not implemented');
  }

}

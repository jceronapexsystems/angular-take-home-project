import { Injectable } from '@angular/core';
import { BookModel } from '../models/book-model';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }

  public getList(): BookModel[] {
    // todo: remove hardcoded values and get it from API
    return [{
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

  public create(model: BookModel) {
    // todo: you must implement this part
  }

  public delete(isbn: string) {
    // todo: you must implement this part
  }

  public update(model: BookModel) {
    // todo: you must implement this part
  }
}

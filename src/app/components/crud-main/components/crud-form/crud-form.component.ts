import { Component, OnInit } from '@angular/core';
import { AuthorModel } from 'src/app/models/author-model';
import { EditorialModel } from 'src/app/models/editorial-model';
import { LanguageModel } from 'src/app/models/language-model';

@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css']
})
export class CrudFormComponent implements OnInit {
  languages: LanguageModel[];
  authors: AuthorModel[];
  editorials: EditorialModel[];

  constructor() {
    this.languages = [{
      id:0,
      value:'-'
    },{
      id: 1,
      value: 'en-US'
    }, {
      id: 2,
      value: 'es-MX'
    }];

    this.authors = [{
      id:0,
      name:'-'
    },{
      id: 1,
      name: 'William Shakespeare'
    }, {
      id: 2,
      name: 'Stephen King'
    }];

    this.editorials = [{
      id:0,
      name:'-'
    },{
      id: 1,
      name: 'Mirahadas'
    }, {
      id: 2,
      name: 'Errara Natura'
    }];
  }

  ngOnInit(): void {
  }

  onSubmitClick() {
    alert('Not implemented');
  }
}

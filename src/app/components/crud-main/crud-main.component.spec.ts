import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMainComponent } from './crud-main.component';

describe('CrudMainComponent', () => {
  let component: CrudMainComponent;
  let fixture: ComponentFixture<CrudMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

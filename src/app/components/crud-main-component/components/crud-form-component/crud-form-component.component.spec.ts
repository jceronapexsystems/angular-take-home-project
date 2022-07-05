import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFormComponentComponent } from './crud-form-component.component';

describe('CrudFormComponentComponent', () => {
  let component: CrudFormComponentComponent;
  let fixture: ComponentFixture<CrudFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

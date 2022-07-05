import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMainComponentComponent } from './crud-main-component.component';

describe('CrudMainComponentComponent', () => {
  let component: CrudMainComponentComponent;
  let fixture: ComponentFixture<CrudMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudMainComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

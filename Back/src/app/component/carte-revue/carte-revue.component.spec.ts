import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteRevueComponent } from './carte-revue.component';

describe('CarteRevueComponent', () => {
  let component: CarteRevueComponent;
  let fixture: ComponentFixture<CarteRevueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteRevueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteRevueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

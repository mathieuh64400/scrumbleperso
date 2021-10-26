import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDaylicarteComponent } from './create-daylicarte.component';

describe('CreateDaylicarteComponent', () => {
  let component: CreateDaylicarteComponent;
  let fixture: ComponentFixture<CreateDaylicarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDaylicarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDaylicarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

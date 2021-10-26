import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaylicarteComponent } from './daylicarte.component';

describe('DaylicarteComponent', () => {
  let component: DaylicarteComponent;
  let fixture: ComponentFixture<DaylicarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaylicarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaylicarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

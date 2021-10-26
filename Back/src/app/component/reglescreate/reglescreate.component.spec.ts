import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglescreateComponent } from './reglescreate.component';

describe('ReglescreateComponent', () => {
  let component: ReglescreateComponent;
  let fixture: ComponentFixture<ReglescreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglescreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglescreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartePbComponent } from './carte-pb.component';

describe('CartePbComponent', () => {
  let component: CartePbComponent;
  let fixture: ComponentFixture<CartePbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartePbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartePbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

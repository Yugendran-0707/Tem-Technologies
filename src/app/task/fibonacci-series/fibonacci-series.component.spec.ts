import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciSeriesComponent } from './fibonacci-series.component';

describe('FibonacciSeriesComponent', () => {
  let component: FibonacciSeriesComponent;
  let fixture: ComponentFixture<FibonacciSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FibonacciSeriesComponent]
    });
    fixture = TestBed.createComponent(FibonacciSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstringComponent } from './substring.component';

describe('SubstringComponent', () => {
  let component: SubstringComponent;
  let fixture: ComponentFixture<SubstringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubstringComponent]
    });
    fixture = TestBed.createComponent(SubstringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

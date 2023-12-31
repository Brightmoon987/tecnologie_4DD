import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthComponentComponent } from './sixth-component.component';

describe('SixthComponentComponent', () => {
  let component: SixthComponentComponent;
  let fixture: ComponentFixture<SixthComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SixthComponentComponent]
    });
    fixture = TestBed.createComponent(SixthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

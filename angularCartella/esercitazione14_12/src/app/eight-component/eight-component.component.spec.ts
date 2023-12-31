import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightComponentComponent } from './eight-component.component';

describe('EightComponentComponent', () => {
  let component: EightComponentComponent;
  let fixture: ComponentFixture<EightComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EightComponentComponent]
    });
    fixture = TestBed.createComponent(EightComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

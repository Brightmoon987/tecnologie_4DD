import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenthComponentComponent } from './tenth-component.component';

describe('TenthComponentComponent', () => {
  let component: TenthComponentComponent;
  let fixture: ComponentFixture<TenthComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenthComponentComponent]
    });
    fixture = TestBed.createComponent(TenthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

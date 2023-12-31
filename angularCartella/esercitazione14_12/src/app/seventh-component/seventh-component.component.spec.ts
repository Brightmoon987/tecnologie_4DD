import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhComponentComponent } from './seventh-component.component';

describe('SeventhComponentComponent', () => {
  let component: SeventhComponentComponent;
  let fixture: ComponentFixture<SeventhComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeventhComponentComponent]
    });
    fixture = TestBed.createComponent(SeventhComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

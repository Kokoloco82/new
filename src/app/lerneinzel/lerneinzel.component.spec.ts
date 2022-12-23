import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LerneinzelComponent } from './lerneinzel.component';

describe('LerneinzelComponent', () => {
  let component: LerneinzelComponent;
  let fixture: ComponentFixture<LerneinzelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LerneinzelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LerneinzelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

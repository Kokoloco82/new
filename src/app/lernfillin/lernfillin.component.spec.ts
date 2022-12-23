import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LernfillinComponent } from './lernfillin.component';

describe('LernfillinComponent', () => {
  let component: LernfillinComponent;
  let fixture: ComponentFixture<LernfillinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LernfillinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LernfillinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

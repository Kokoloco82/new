import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LernsingleComponent } from './lernsingle.component';

describe('LernsingleComponent', () => {
  let component: LernsingleComponent;
  let fixture: ComponentFixture<LernsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LernsingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LernsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

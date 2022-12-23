import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LernmultiComponent } from './lernmulti.component';

describe('LernmultiComponent', () => {
  let component: LernmultiComponent;
  let fixture: ComponentFixture<LernmultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LernmultiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LernmultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

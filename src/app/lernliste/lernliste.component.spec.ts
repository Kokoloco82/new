import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LernlisteComponent } from './lernliste.component';

describe('LernlisteComponent', () => {
  let component: LernlisteComponent;
  let fixture: ComponentFixture<LernlisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LernlisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LernlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

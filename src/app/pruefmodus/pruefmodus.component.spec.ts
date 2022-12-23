import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruefmodusComponent } from './pruefmodus.component';

describe('PruefmodusComponent', () => {
  let component: PruefmodusComponent;
  let fixture: ComponentFixture<PruefmodusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruefmodusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruefmodusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

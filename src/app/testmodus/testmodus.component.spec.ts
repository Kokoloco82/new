import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmodusComponent } from './testmodus.component';

describe('TestmodusComponent', () => {
  let component: TestmodusComponent;
  let fixture: ComponentFixture<TestmodusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestmodusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestmodusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

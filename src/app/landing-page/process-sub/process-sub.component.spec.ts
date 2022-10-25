import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessSubComponent } from './process-sub.component';

describe('ProcessSubComponent', () => {
  let component: ProcessSubComponent;
  let fixture: ComponentFixture<ProcessSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

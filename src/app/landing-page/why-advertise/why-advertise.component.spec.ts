import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAdvertiseComponent } from './why-advertise.component';

describe('WhyAdvertiseComponent', () => {
  let component: WhyAdvertiseComponent;
  let fixture: ComponentFixture<WhyAdvertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyAdvertiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyAdvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

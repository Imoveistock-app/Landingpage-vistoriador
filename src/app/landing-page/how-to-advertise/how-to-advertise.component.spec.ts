import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToAdvertiseComponent } from './how-to-advertise.component';

describe('HowToAdvertiseComponent', () => {
  let component: HowToAdvertiseComponent;
  let fixture: ComponentFixture<HowToAdvertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToAdvertiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToAdvertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicateNowComponent } from './indicate-now.component';

describe('IndicateNowComponent', () => {
  let component: IndicateNowComponent;
  let fixture: ComponentFixture<IndicateNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicateNowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicateNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

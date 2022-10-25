import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyPartnerComponent } from './why-partner.component';

describe('WhyPartnerComponent', () => {
  let component: WhyPartnerComponent;
  let fixture: ComponentFixture<WhyPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

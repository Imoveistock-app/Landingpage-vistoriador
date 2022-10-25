import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePartnerComponent } from './see-partner.component';

describe('SeePartnerComponent', () => {
  let component: SeePartnerComponent;
  let fixture: ComponentFixture<SeePartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeePartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectAppModalComponent } from './redirect-app-modal.component';

describe('RedirectAppModalComponent', () => {
  let component: RedirectAppModalComponent;
  let fixture: ComponentFixture<RedirectAppModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectAppModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectAppModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

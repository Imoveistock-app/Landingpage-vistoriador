import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantToBePartComponent } from './want-to-be-part.component';

describe('WantToBePartComponent', () => {
  let component: WantToBePartComponent;
  let fixture: ComponentFixture<WantToBePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantToBePartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WantToBePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

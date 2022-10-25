import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantToBePart2Component } from './want-to-be-part2.component';

describe('WantToBePart2Component', () => {
  let component: WantToBePart2Component;
  let fixture: ComponentFixture<WantToBePart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantToBePart2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WantToBePart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

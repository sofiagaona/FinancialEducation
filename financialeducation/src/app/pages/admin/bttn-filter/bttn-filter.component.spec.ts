import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BttnFilterComponent } from './bttn-filter.component';

describe('BttnFilterComponent', () => {
  let component: BttnFilterComponent;
  let fixture: ComponentFixture<BttnFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BttnFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BttnFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

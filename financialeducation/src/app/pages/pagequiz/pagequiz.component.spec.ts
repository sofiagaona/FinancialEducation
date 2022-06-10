import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagequizComponent } from './pagequiz.component';

describe('PagequizComponent', () => {
  let component: PagequizComponent;
  let fixture: ComponentFixture<PagequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagequizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

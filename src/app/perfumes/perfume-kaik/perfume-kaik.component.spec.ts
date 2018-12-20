import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfumeKaikComponent } from './perfume-kaik.component';

describe('PerfumeKaikComponent', () => {
  let component: PerfumeKaikComponent;
  let fixture: ComponentFixture<PerfumeKaikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfumeKaikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfumeKaikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

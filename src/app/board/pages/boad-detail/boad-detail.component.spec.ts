import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoadDetailComponent } from './boad-detail.component';

describe('BoadDetailComponent', () => {
  let component: BoadDetailComponent;
  let fixture: ComponentFixture<BoadDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoadDetailComponent]
    });
    fixture = TestBed.createComponent(BoadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

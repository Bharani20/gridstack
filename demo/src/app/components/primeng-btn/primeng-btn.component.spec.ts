import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengBtnComponent } from './primeng-btn.component';

describe('PrimengBtnComponent', () => {
  let component: PrimengBtnComponent;
  let fixture: ComponentFixture<PrimengBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

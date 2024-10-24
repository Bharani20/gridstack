import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengTextareaComponent } from './primeng-textarea.component';

describe('PrimengTextareaComponent', () => {
  let component: PrimengTextareaComponent;
  let fixture: ComponentFixture<PrimengTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengTextareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

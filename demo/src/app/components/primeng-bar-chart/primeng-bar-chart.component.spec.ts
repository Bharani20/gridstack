import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengBarChartComponent } from './primeng-bar-chart.component';

describe('PrimengBarChartComponent', () => {
  let component: PrimengBarChartComponent;
  let fixture: ComponentFixture<PrimengBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengBarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimengBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, Input, OnInit } from '@angular/core';
import { BaseWidget, NgCompInputs } from 'gridstack/dist/angular';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-primeng-bar-chart',
  templateUrl: './primeng-bar-chart.component.html',
  styleUrl: './primeng-bar-chart.component.scss',
})
export class PrimengBarChartComponent extends BaseWidget implements OnInit {
  @Input() basicData: any;
  @Input() basicOptions: any;
  public override serialize(): NgCompInputs | undefined {
    return this.basicData
      ? { basicData: this.basicData, basicOptions: this.basicOptions }
      : undefined;
  }
  ngOnInit(): void {}
}

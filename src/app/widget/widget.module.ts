import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengBarChartComponent } from './components/primeng-bar-chart/primeng-bar-chart.component';
import { PrimengBtnComponent } from './components/primeng-btn/primeng-btn.component';
import { PrimengTableComponent } from './components/primeng-table/primeng-table.component';
import { PrimengTextareaComponent } from './components/primeng-textarea/primeng-textarea.component';
import { GridstackModule, GridstackComponent } from 'gridstack/dist/angular';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PrimengBarChartComponent,
    PrimengBtnComponent,
    PrimengTableComponent,
    PrimengTextareaComponent,
  ],
  imports: [
    CommonModule,
    GridstackModule,
    ChartModule,
    ButtonModule,
    TableModule,
    FormsModule,
    InputTextareaModule,
  ],
  exports: [
    PrimengBarChartComponent,
    PrimengBtnComponent,
    PrimengTableComponent,
    PrimengTextareaComponent,
    GridstackModule,
  ],
})
export class WidgetModule {
  constructor() {
    GridstackComponent.addComponentToSelectorType([
      PrimengBtnComponent,
      PrimengTableComponent,
      PrimengBarChartComponent,
      PrimengTextareaComponent,
    ]);
  }
}

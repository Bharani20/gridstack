import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PageBuilderRoutingModule } from './page-builder-routing.module';
import { PageBuilderComponent } from './page-builder.component';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { WidgetModule } from '../widget/widget.module';

// import { PrimengBtnComponent } from '../widget/components/primeng-btn/primeng-btn.component';
// import { PrimengTableComponent } from '../widget/components/primeng-table/primeng-table.component';
// import { PrimengBarChartComponent } from '../widget/components/primeng-bar-chart/primeng-bar-chart.component';


@NgModule({
  declarations: [
    PageBuilderComponent,
  ],
  imports: [
    CommonModule,
    WidgetModule,
    PageBuilderRoutingModule,
    AvatarModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    FormsModule,
    FloatLabelModule,
  ]
})
export class PageBuilderModule {

}

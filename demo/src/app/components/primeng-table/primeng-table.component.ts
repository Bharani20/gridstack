import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { BaseWidget, NgCompInputs } from 'gridstack/dist/angular';

@Component({
  selector: 'app-primeng-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './primeng-table.component.html',
  styleUrl: './primeng-table.component.scss',
})
export class PrimengTableComponent extends BaseWidget {
  @Input() tableData: any[] = [];
  // @Input() label: any;
  public override serialize(): NgCompInputs | undefined {
    return this.tableData ? { tableData: this.tableData } : undefined;
  }
}

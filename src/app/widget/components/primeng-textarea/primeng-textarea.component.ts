import { Component, Input } from '@angular/core';
import { BaseWidget, NgCompInputs } from 'gridstack/dist/angular';

@Component({
  selector: 'app-primeng-textarea',
  templateUrl: './primeng-textarea.component.html',
  styleUrl: './primeng-textarea.component.css',
})
export class PrimengTextareaComponent extends BaseWidget {
  @Input() value: string = '';
  public override serialize(): NgCompInputs | undefined {
    return this.value ? { tableData: this.value } : undefined;
  }
}

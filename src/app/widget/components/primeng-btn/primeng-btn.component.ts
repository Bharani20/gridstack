import { Component, Input, OnDestroy } from '@angular/core';
import { BaseWidget, NgCompInputs } from 'gridstack/dist/angular';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-primeng-btn',
  templateUrl: './primeng-btn.component.html',
  styleUrl: './primeng-btn.component.css',
})
export class PrimengBtnComponent extends BaseWidget {
  @Input() label: any;
  public override serialize(): NgCompInputs | undefined {
    return this.label ? { label: this.label } : undefined;
  }
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-totals-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './totals-bar.component.html',
})
export class TotalsBarComponent {
  @Input() speciesTotals: { [key: string]: number } = {};
  @Input() typeTotals: { [key: string]: number } = {};

  get objectKeys() {
    return Object.keys;
  }
}

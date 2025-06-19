import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-totals-bar',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatCardModule],
  templateUrl: './totals-bar.component.html',
})
export class TotalsBarComponent {
  @Input() speciesTotals: { [key: string]: number } = {};
  @Input() typeTotals: { [key: string]: number } = {};

  chipColors = [
    '!bg-blue-200',
    '!bg-green-200',
    '!bg-yellow-200',
    '!bg-red-200 ',
    '!bg-purple-200',
    '!bg-pink-200',
    '!bg-gray-200',
  ];

  getColorClass(index: number) {
    return this.chipColors[index % this.chipColors.length];
  }

  get objectKeys() {
    return Object.keys;
  }
}

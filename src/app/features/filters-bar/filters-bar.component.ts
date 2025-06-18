import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters-bar',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './filters-bar.component.html',
})
export class FiltersBarComponent {
  @Input() filterName: string = '';
  @Input() filterStatus: string = '';

  @Output() filtersChange = new EventEmitter<{
    name: string;
    status: string;
  }>();

  applyFilters() {
    this.filtersChange.emit({
      name: this.filterName,
      status: this.filterStatus,
    });
  }
}

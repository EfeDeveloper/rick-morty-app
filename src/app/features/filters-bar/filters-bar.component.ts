import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  GENDER_OPTIONS,
  STATUS_OPTIONS,
} from '@/core/constants/filters.constants';
import { MultiSelectFilterComponent } from '../../shared/components/multi-select-filter/multi-select-filter.component';

@Component({
  selector: 'app-filters-bar',
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MultiSelectFilterComponent,
  ],
  templateUrl: './filters-bar.component.html',
})
export class FiltersBarComponent {
  @Input() name: string = '';
  @Input() status: string[] = [];
  @Input() gender: string[] = [];

  genderOptions = GENDER_OPTIONS;
  statusOptions = STATUS_OPTIONS;

  selectedStatus: string[] = [];
  selectedGender: string[] = [];

  @Output() filtersChange = new EventEmitter<{
    name: string;
    status: string[];
    gender: string[];
  }>();

  ngOnInit() {
    this.selectedStatus = [...this.status];
    this.selectedGender = [...this.gender];
  }

  ngOnChanges() {
    this.selectedStatus = [...this.status];
    this.selectedGender = [...this.gender];
  }

  applyFilters() {
    this.filtersChange.emit({
      name: this.name,
      status: this.selectedStatus,
      gender: this.selectedGender,
    });
  }
}

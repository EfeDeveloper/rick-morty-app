import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { CommonModule, DatePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';

import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe,
    MatIconModule,
    MatPaginatorModule,
  ],
})
export class CharactersTableComponent {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() pageSize: number = 10;
  @Input() totalResults: number = 0;
  @Input() pageIndex: number = 0;

  @Output() pageChange = new EventEmitter<number>();
  @Output() select = new EventEmitter<any>();
  @Output() markFavorite = new EventEmitter<any>();

  onPageChange(event: any) {
    this.pageChange.emit(event.pageIndex);
  }
  onSelect(character: any) {
    this.select.emit(character);
  }
  onMarkFavorite(character: any) {
    this.markFavorite.emit(character);
  }
}

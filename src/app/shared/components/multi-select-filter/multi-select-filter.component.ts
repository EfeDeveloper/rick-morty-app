import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-multi-select-filter',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './multi-select-filter.component.html',
})
export class MultiSelectFilterComponent implements OnInit, OnChanges {
  @Input() label: string = '';
  @Input() options: { value: string; label: string; color?: string }[] = [];
  @Input() selected: string[] = [];
  @Output() selectedChange = new EventEmitter<string[]>();

  control = new FormControl<string[]>([], { nonNullable: true });

  ngOnInit() {
    this.control.setValue(this.selected ?? []);
    this.control.valueChanges.subscribe((val) => {
      this.selectedChange.emit(val ?? []);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['selected'] &&
      !this.areArraysEqual(changes['selected'].currentValue, this.control.value)
    ) {
      this.control.setValue(this.selected ?? []);
    }
  }

  areArraysEqual(a?: string[], b?: string[]): boolean {
    if (!a || !b) return false;
    if (a.length !== b.length) return false;
    return a.every((val, i) => val === b[i]);
  }

  get firstLabel(): string {
    if (!this.control.value?.length) return '';
    const found = this.options.find(
      (opt) => opt.value === this.control.value[0]
    );
    return found ? found.label : '';
  }

  get firstColor(): string {
    if (!this.control.value?.length) return '';
    const found = this.options.find(
      (opt) => opt.value === this.control.value[0]
    );
    return found ? found.color || '' : '';
  }

  get count(): number {
    return this.control.value?.length || 0;
  }
}

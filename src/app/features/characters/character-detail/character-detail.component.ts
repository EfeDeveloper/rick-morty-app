import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FallbackPipe } from '@/shared/pipes/fallback.pipe';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FallbackPipe,
  ],
  templateUrl: './character-detail.component.html',
})
export class CharacterDetailComponent {
  @Input() detail: any = null;
  @Input() loading: boolean = false;
  @Input() error: any = null;

  getStatusColor(status: string): 'primary' | 'accent' | 'warn' {
    if (status === 'Alive') return 'primary';
    if (status === 'Dead') return 'warn';
    return 'accent';
  }
}

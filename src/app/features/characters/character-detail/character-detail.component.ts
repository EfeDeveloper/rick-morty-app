import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { FallbackPipe } from '@/shared/pipes/fallback.pipe'
import { Character } from '@/models/character.model'

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
  @Input() detail: Character | null = null
  @Input() loading: boolean = false
  @Input() error: unknown = null

  getStatusColor(status: string): 'primary' | 'accent' | 'warn' {
    if (status === 'Alive') return 'primary'
    if (status === 'Dead') return 'warn'
    return 'accent'
  }
}

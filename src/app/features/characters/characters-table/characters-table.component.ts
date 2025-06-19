import { Component, Input, Output, EventEmitter } from '@angular/core'

import { MatTableModule } from '@angular/material/table'
import { CommonModule, DatePipe } from '@angular/common'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { MatIconModule } from '@angular/material/icon'

import { MatPaginatorModule, PageEvent } from '@angular/material/paginator'
import { Character } from '@/models/character.model'
import { FallbackPipe } from '@/shared/pipes/fallback.pipe'

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe,
    MatIconModule,
    MatPaginatorModule,
    FallbackPipe,
  ],
})
export class CharactersTableComponent {
  @Input() dataSource: Character[] = []
  @Input() displayedColumns: string[] = []
  @Input() pageSize: number = 10
  @Input() totalResults: number = 0
  @Input() pageIndex: number = 0
  @Input() favorites: Character[] = []

  @Output() pageChange = new EventEmitter<number>()
  @Output() characterSelect = new EventEmitter<Character>()
  @Output() markFavorite = new EventEmitter<{ character: Character; isFavorite: boolean }>()

  onPageChange(event: PageEvent) {
    this.pageChange.emit(event.pageIndex)
  }
  onSelect(character: Character) {
    this.characterSelect.emit(character)
  }

  onMarkFavorite(character: Character) {
    const isFav = this.isFavorite(character)
    this.markFavorite.emit({ character, isFavorite: isFav })
  }

  isFavorite(character: Character): boolean {
    return this.favorites && this.favorites.some((fav) => fav.id === character.id)
  }
}

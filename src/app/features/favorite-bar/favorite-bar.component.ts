import { Component, EventEmitter, inject, Output } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppState } from '@/store'
import { removeFavorite } from '@/store/favorite/favorite.actions'
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { Character } from '@/models/character.model'

@Component({
  selector: 'app-favorite-bar',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './favorite-bar.component.html',
})
export class FavoriteBarComponent {
  @Output() viewFavoriteDescription = new EventEmitter<Character>()
  favorites$: Observable<Character[]>
  private store = inject(Store<AppState>)

  constructor() {
    this.favorites$ = this.store.pipe(select((state) => state.favorite.characters))
  }

  removeFavorite(id: string) {
    this.store.dispatch(removeFavorite({ characterId: id }))
  }
}

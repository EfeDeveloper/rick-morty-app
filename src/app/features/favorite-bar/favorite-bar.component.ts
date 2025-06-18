import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '@/store';
import { removeFavorite } from '@/store/favorite/favorite.actions';

@Component({
  selector: 'app-favorite-bar',
  imports: [CommonModule],
  templateUrl: './favorite-bar.component.html',
})
export class FavoriteBarComponent {
  @Output() selectFavorite = new EventEmitter<any>();
  favorite$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.favorite$ = this.store.pipe(
      select((state) => state.favorite.character)
    );
  }

  removeFavorite(id: string) {
    this.store.dispatch(removeFavorite({ characterId: id }));
  }
}

import { createReducer, on } from '@ngrx/store';
import { addFavorite, removeFavorite } from '@/store/favorite/favorite.actions';

export interface FavoriteState {
  character: any | null;
}

export const initialState: FavoriteState = {
  character: null,
};

export const favoriteReducer = createReducer(
  initialState,
  on(addFavorite, (state, { character }) => ({
    ...state,
    character,
  })),
  on(removeFavorite, (state, { characterId }) => ({
    ...state,
    character:
      state.character && state.character.id === characterId
        ? null
        : state.character,
  }))
);

import { createReducer, on } from '@ngrx/store';
import { addFavorite, removeFavorite } from '@/store/favorite/favorite.actions';

export interface FavoriteState {
  characters: any[];
}

export const initialState: FavoriteState = {
  characters: [],
};

export const favoriteReducer = createReducer(
  initialState,
  on(addFavorite, (state, { character }) => ({
    ...state,
    characters: state.characters.some((fav) => fav.id === character.id)
      ? state.characters
      : [...state.characters, character],
  })),
  on(removeFavorite, (state, { characterId }) => ({
    ...state,
    characters: state.characters.filter((fav) => fav.id !== characterId),
  }))
);

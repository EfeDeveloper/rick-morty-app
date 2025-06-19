import { createReducer, on } from '@ngrx/store'
import { addFavorite, removeFavorite } from '@/store/favorite/favorite.actions'
import { Character } from '@/models/character.model'

export interface FavoriteState {
  characters: Character[]
}

export const initialState: FavoriteState = {
  characters: [],
}

export const favoriteReducer = createReducer(
  initialState,
  on(addFavorite, (state, { character }) => ({
    ...state,
    characters: state.characters.some((fav: Character) => fav.id === character.id)
      ? state.characters
      : [...state.characters, character],
  })),
  on(removeFavorite, (state, { characterId }) => ({
    ...state,
    characters: state.characters.filter((fav: Character) => fav.id !== characterId),
  }))
)

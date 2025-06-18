import {
  favoriteReducer,
  FavoriteState,
} from '@/store/favorite/favorite.reducer';

export interface AppState {
  favorite: FavoriteState;
}

export const reducers = {
  favorite: favoriteReducer,
};

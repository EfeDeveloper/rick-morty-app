import { createAction, props } from '@ngrx/store';

export const addFavorite = createAction(
  '[Favorite] Add',
  props<{ character: any }>()
);

export const removeFavorite = createAction(
  '[Favorite] Remove',
  props<{ characterId: string }>()
);

import { Character } from '@/models/character.model'
import { createAction, props } from '@ngrx/store'

export const addFavorite = createAction('[Favorite] Add', props<{ character: Character }>())

export const removeFavorite = createAction('[Favorite] Remove', props<{ characterId: string }>())

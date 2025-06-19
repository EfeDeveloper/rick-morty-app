import { Character } from '@/models/character.model'

export interface CharactersDto {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Character[]
}

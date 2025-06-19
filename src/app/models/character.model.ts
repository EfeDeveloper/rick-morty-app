import { Episode } from './episode.model'
import { Location } from './location.model'

export interface Character {
  id: string
  name: string
  status: 'Alive' | 'Dead' | 'unknown' | string
  species: string
  type: string
  gender: 'Male' | 'Female' | 'Genderless' | 'unknown' | string
  image: string
  created: string
  origin: Location
  location: Location
  episode: Episode[]
  __typename?: string
}

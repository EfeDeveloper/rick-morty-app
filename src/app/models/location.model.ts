import { Resident } from './resident.model'

export interface Location {
  name?: string
  type: string | null
  dimension?: string
  residents: Resident[] | []
  __typename?: string
}

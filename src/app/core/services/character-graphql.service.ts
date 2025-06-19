import { inject, Injectable } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { GET_CHARACTER_DETAIL } from '@/core/graphql/character/character-detail.query'
import { Character } from '@/models/character.model'

@Injectable({ providedIn: 'root' })
export class CharacterGraphqlService {
  private apollo = inject(Apollo)

  getCharacterDetail(id: string): Observable<Character> {
    return this.apollo
      .watchQuery<{ character: Character }>({
        query: GET_CHARACTER_DETAIL,
        variables: { id },
      })
      .valueChanges.pipe(map((result: { data: { character: Character } }) => result.data.character))
  }
}

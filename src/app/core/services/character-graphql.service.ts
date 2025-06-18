import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GET_CHARACTER_DETAIL } from '@/core/graphql/character/character-detail.query';

@Injectable({ providedIn: 'root' })
export class CharacterGraphqlService {
  constructor(private apollo: Apollo) {}

  getCharacterDetail(id: string): Observable<any> {
    return this.apollo
      .watchQuery({
        query: GET_CHARACTER_DETAIL,
        variables: { id },
      })
      .valueChanges.pipe(map((result: any) => result.data.character));
  }
}

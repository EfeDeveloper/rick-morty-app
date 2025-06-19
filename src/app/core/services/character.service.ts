import { inject, Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { CharactersDto } from '@/models/characters.dto.model'

type CharacterQueryParams = Partial<Record<'name' | 'status' | 'gender' | 'page', string>>

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiUrl = `${environment.restEndpoint}/character`
  private http = inject(HttpClient)

  getCharacters(params: CharacterQueryParams = {}): Observable<CharactersDto> {
    let httpParams = new HttpParams()
    Object.keys(params).forEach((key) => {
      if (params[key as keyof CharacterQueryParams]) {
        httpParams = httpParams.set(key, params[key as keyof CharacterQueryParams]!)
      }
    })

    return this.http.get<CharactersDto>(this.apiUrl, { params: httpParams })
  }
}

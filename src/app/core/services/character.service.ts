import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiUrl = `${environment.restEndpoint}/character`;

  constructor(private http: HttpClient) {}

  getCharacters(params: { [key: string]: any } = {}): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
      if (params[key]) {
        httpParams = httpParams.set(key, params[key]);
      }
    });

    return this.http.get<any>(this.apiUrl, { params: httpParams });
  }
}

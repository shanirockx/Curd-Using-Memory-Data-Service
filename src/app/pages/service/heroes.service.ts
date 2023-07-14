import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiURL = 'api/heroes';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiURL)
  }

  getSingleHero(heroId: any): Observable<any> {
    return this.http.get<any>(
      `${this.apiURL}/${heroId}`
    )
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.apiURL, hero, this.httpOptions)
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.apiURL, hero, this.httpOptions)
  }

  deleteHero(heroId: any): Observable<Hero> {
    return this.http.delete<Hero>(`${this.apiURL}/${heroId}`, this.httpOptions)
  }

}
  
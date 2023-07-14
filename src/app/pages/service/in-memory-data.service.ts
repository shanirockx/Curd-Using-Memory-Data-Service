import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 1, name: 'Zeeshan' },
      { id: 2, name: 'Adil' },
      { id: 3, name: 'David' },
      { id: 4, name: 'John' },
      { id: 5, name: 'Mike' },
      { id: 6, name: 'Dyne' },
      { id: 7, name: 'Hameed' },
      { id: 8, name: 'Ali' },
      { id: 9, name: 'Hamza' },
      { id: 10, name: 'Qureshi' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}

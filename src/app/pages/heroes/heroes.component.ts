import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../service/heroes.service';
import { Hero } from '../service/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: any;

  constructor(private heroesService: HeroesService ) {}
  
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes().subscribe((result) => {
      this.heroes = result;
    });
  }

  addHero(name: string): void {
    if (!name) { return; }
    this.heroesService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  deleteHero(hero: Hero) {
    this.heroes = this.heroes.filter((h:any) => h !== hero);
  
  }
}

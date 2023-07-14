import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../service/heroes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: any;

  constructor(private heroesService: HeroesService) {}
  
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroesService.getHeroes().subscribe((result) => {
      this.heroes = result.slice(1, 5);
    });
  }
  
}

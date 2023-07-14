import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../service/heroes.service';
import { Hero } from '../../service/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  heroID: any;
  heroDetail: Hero | undefined;

  constructor(private location: Location, private activatedRoute:ActivatedRoute, private heroService: HeroesService) {
    this.heroID = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.getHero();
  }

  getHero() {
    this.heroService.getSingleHero(this.heroID)
      .subscribe(hero => this.heroDetail = hero);
  }

  goBack() {
    this.location.back();
  }

  save() {
    if (this.heroDetail) {
      this.heroService.updateHero(this.heroDetail)
        .subscribe(() => this.goBack());
    }
  }
}

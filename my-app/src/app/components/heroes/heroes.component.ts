import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe} from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private router: Router) {
    
  }

  ngOnInit() {
    // Obtenemos el array de heroes desde el servicio
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  // Para obtener el id del héroe que está en el array 
  public verHeroe(idx:number){
    console.log(idx);
    this.router.navigate(['/heroe', idx]);

  }

}

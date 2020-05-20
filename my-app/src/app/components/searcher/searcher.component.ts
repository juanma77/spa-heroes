import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  public heroes: any [] = [];
  public termino: string;

  constructor(private activatedRoute:ActivatedRoute, private _heroesService: HeroesService, private router: Router){
  
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params =>{
      console.log(params['termino']); // Recibimos el termino desde el navbar component

      // Para que nuestra variable local termino sea igual al termino que obtenemos
      this.termino = params['termino'];

      // Obtenemos un héroe en particular con un id en particular
      this.heroes = this._heroesService.buscarHeroes(params['termino']);

      // Aquí ya tenemos el heroe que coincide con el termino
      console.log(this.heroes);       
    });
  }

  public verHeroe(idx: number){
    console.log(idx);
    this.router.navigate(['/heroe',]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  public heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) { 
  
    /* Recibimos el párametro por el url; aquí nos suscribimos
    al observable para recibir los párametros (el id del héroe)*/
    this.activatedRoute.params.subscribe(params =>{
      /* Debemos de  poner el nombre del párametro que 
      mandamos por la url, es decir el que pusimos
      en el archivo de rutas*/
      console.log(params['id']);

      // Obtenemos un héroe en particular con un id en particular
      this.heroe = this._heroesService.getHeroe(params ['id']);

    })

  }

  ngOnInit() {
  }

}

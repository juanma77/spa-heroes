import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public heroes: Heroe[] = [];

  constructor(private router: Router) {

  }

  ngOnInit() { 
     
  }

  // Redireccionamos a la nueva pantalla (searcher component)
  public buscarHeroe(termino:string){
    console.log(termino); // Mandamos termino hacia el searcher component 
    this.router.navigate(['/searcher',termino]);
  }
  
}

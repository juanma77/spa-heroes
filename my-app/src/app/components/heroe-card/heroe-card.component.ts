import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  // Con el Input decimos que queremos recibir una propiedad en este componente desde otro componente de afuera 
  @Input() public heroe: any = {};
  @Input() public index: number; 

  constructor(private route: Router) {

  }

  ngOnInit() {
  }

  public verHeroe(){
    console.log(this.index);
    this.route.navigate(['/heroe',this.index]);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  // Con el Output decimos que esta es una propiedad o evento que el padre heroes.component.ts va a estar escuchando; esta propiedad "sale" de este componente hijo hacia el padre
  @Output() public heroeSeleccionado: EventEmitter<number>;

  constructor(private route: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  public verHeroe(){
    // console.log(this.index);
    this.route.navigate(['/heroe',this.index]);

    // Debemos de emitir el evento con la propiedad que vamos a pasar desde el componente hijo al padre siempre que usamos el Output 
    // this.heroeSeleccionado.emit(this.index);

  }
}

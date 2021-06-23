import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje [] = [
    {
      nombre: 'Goku',
      poder: 15500
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    },
    {
      nombre: 'Krilling',
      poder: 3000
    }
  ];

  agregarPersonaje( personaje:Personaje ){
    this.personajes.push( personaje );
  }

  constructor( private dbzService: DbzService ){}

}

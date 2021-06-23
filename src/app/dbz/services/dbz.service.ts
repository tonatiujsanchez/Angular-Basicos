import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    private _personajes: Personaje [] = [
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
    
    get personajes():Personaje[]{
        return [...this._personajes];
    }

    constructor(){}
    
    agregarPersonaje( personaje:Personaje ): void{
      this._personajes.push( personaje );
    }
}
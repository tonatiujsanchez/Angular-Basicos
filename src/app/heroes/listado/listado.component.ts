import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroeBorrado:string = '';
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Capitán América',
    'Romanoff',
    'Hawkeye',
    'Thor'
  ];

  borrarHeroe(idx:number):void{
     this.heroeBorrado = this.heroes.splice( idx, 1).toString()
  }

}

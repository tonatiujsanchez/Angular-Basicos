import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Output() nuevoEmit: EventEmitter<Personaje> = new EventEmitter();
  
  nuevo:Personaje = {
    nombre:'',
    poder: 0
  }

  agregar(){
    if( this.nuevo.nombre.trim().length === 0 ){
      return;
    }

    this.nuevoEmit.emit( this.nuevo );
        
    this.nuevo = {
      nombre: '',
      poder: 0
    }    
  }



}

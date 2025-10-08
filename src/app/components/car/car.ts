import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../car.model'


@Component({
  selector: 'app-car',
  standalone: false,
  templateUrl: './car.html',
  styleUrl: './car.css'
})
export class CarComponent {
  
  @Input()
   car: Car = {} as Car;


   @Output()
    saveEmitter = new EventEmitter();


   save(){

    if (this.car.year < 0)
    {
      alert("Impossivel cadastrar ano negativo!");
      return;
    }

    if (this.car.price < 0)
    {
      alert("Impossivel cadastrar preço negativo!");
      return;
    }

    
    this.saveEmitter.emit();



   }
  

}

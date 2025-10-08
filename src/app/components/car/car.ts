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
    this.saveEmitter.emit();
   }
  

}

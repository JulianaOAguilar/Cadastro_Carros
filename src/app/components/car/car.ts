import { Component, Input } from '@angular/core';
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
  

}

import { Component } from '@angular/core';
import { Car} from '../../car.model'


@Component({
  selector: 'app-car',
  standalone: false,
  templateUrl: './car.html',
  styleUrl: './car.css'
})
export class CarComponent {
  car: Car = {
    id: 1,
    name: 'Fusca',
    assembler: 'Tadeu',
    price: 5000.50,
    year: 1860
  }
}

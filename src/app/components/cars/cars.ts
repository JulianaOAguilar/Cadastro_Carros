import { Component } from '@angular/core';
import { Car} from '../../car.model'


@Component({
  selector: 'app-cars',
  standalone: false,
  templateUrl: './cars.html',
  styleUrl: './cars.css'
})
export class Cars {
cars: Car[] = [
  {
    id: 1,
    name: 'Fusca',
    assembler: 'Tadeu',
    price: 5000.50,
    year: 1860
  },

  {
    id: 2,
    name: 'Renault Sandero',
    assembler: 'Juju Clara Car',
    price: 100000.50,
    year: 2010
  }
]
}

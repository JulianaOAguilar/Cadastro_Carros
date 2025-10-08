import { Component } from '@angular/core';
import { Car} from '../../car.model'


@Component({
  selector: 'app-cars',
  standalone: false,
  templateUrl: './cars.html',
  styleUrl: './cars.css'
})
export class Cars {

  car: Car = {name: 'teste'} as Car;
cars: Car[] = [
  {
    id: 1,
    name: 'Fusa',
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

  saveCar() {
    this.car.id = this.cars.length + 1;
    this.cars.push(this.car);
    this.car = {} as Car;
  }
}

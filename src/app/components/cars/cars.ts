import { Component } from '@angular/core';
import { Car } from '../../car.model'


@Component({
  selector: 'app-cars',
  standalone: false,
  templateUrl: './cars.html',
  styleUrl: './cars.css'
})
export class Cars {
  isUpdate: boolean = false;
  idCount: number = 3;


  car: Car = {} as Car;
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

  saveCar() {

    if (!this.isUpdate) {
      this.car.id = this.idCount;
      this.idCount++;
      this.cars.push(this.car);
    }

    this.car = {} as Car;
    this.isUpdate = false;
  }


  update(selectedCar: Car) {
    this.car = selectedCar;
    this.isUpdate = true;
  }

  remove(selectedCar: Car) {
    this.cars = this.cars.filter(b => b !== selectedCar);
  }
}


import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { Products } from './products';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-share-data');

  public employees: {
    id: number,
    firstname: string,
    lastname: string,
    email:string
  }[] = [];

  public products: {
    id: string,
    name: string,
    desc: string,
    price: number
  }[] = [];

  constructor(
    private _employeeService: Employee,
    private _productsService: Products
  ){}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productsService.getProducts();
  }
}

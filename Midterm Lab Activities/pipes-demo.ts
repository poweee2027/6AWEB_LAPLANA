import { Component, OnInit } from '@angular/core';
import {
  CommonModule,
  DatePipe,
  UpperCasePipe,
  LowerCasePipe,
  AsyncPipe,
  CurrencyPipe,
  SlicePipe,
  DecimalPipe,
  PercentPipe,
  JsonPipe,
  TitleCasePipe,
  KeyValuePipe
} from '@angular/common';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo implements OnInit {
  presentDate = new Date();
  price: number = 20000;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  completionRate: number = 0.45; // ← ADD THIS
  titleText: string = 'angular pipes demo'; // ← ADD THIS

  user = {                           // ← ADD THIS
    name: 'pipowe laplana',
    age: 21,
    role: 'student'
  };

  time$: Observable<Date> = interval(1000).pipe(
    map(() => new Date())
  );

  ngOnInit() {}
}


@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="text-align:center">

      <h3>Currency Pipe</h3>
      <p>{{ price | currency:'':true }}</p>
      <p>{{ price | currency:'INR' }}</p>

      <div style="background-color:#eeeeee; padding:10px; display:inline-block; text-align:left; margin:20px auto;">
        <h3>Decimal Pipe</h3>
        {{ decimalNum1 | number }} <br/>
        {{ decimalNum2 | number }}
      </div>

      <div style="margin-top:10px;">
        <p>Apply formatting: {{ decimalNum1 | number:'3.1' }}</p>
        <p>Apply formatting: {{ decimalNum1 | number:'2.1-4' }}</p>
      </div>

      <div style="background-color:#eeeeee; padding:10px; display:inline-block; text-align:left; margin-top:20px;">
        <h3>Percent Pipe</h3>
        Raw value: {{ completionRate }} <br/>
        Default: {{ completionRate | percent }} <br/>
        One decimal: {{ completionRate | percent:'1.1-1' }} <br/>
        Two decimals: {{ completionRate | percent:'1.2-2' }}
      </div>

      <div style="background-color:#eeeeee; padding:10px; display:inline-block; text-align:left; margin-top:20px;">
        <h3>Slice Pipe</h3>
        Start index: {{ Fruits | slice:2 }} <br/>
        Start–end index: {{ Fruits | slice:1:4 }} <br/>
        Negative index: {{ Fruits | slice:-2 }} <br/>
        Negative range: {{ Fruits | slice:-4:-2 }}
      </div>

      <div style="background-color:#eeeeee; padding:10px; display:inline-block; text-align:left; margin-top:20px;">
        <h3>Title Case Pipe</h3>
        Original: {{ titleText }} <br/>
        Title case: {{ titleText | titlecase }}
      </div>

      <div style="background-color:#eeeeee; padding:10px; display:inline-block; text-align:left; margin-top:20px;">
        <h3>Json Pipe</h3>
        {{ user | json }}
      </div>

      <div style="background-color:#eeeeee; padding:10px; display:inline-block; text-align:left; margin-top:20px;">
        <h3>Key Value Pipe</h3>
        <div *ngFor="let item of user | keyvalue">
          {{ item.key }} : {{ item.value }}
        </div>
      </div>

    </div>
  `
})
export class TestComponent implements OnInit {
  price: number = 20000;
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  completionRate: number = 0.45;

  titleText: string = 'angular pipes demo';

  user = {
    name: 'pipowe laplana',
    age: 21,
    role: 'student'
  };

  ngOnInit() {}
}

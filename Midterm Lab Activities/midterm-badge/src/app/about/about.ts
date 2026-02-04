import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  presentDate = new Date();
  title = 'About this portal';
}

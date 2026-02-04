import { Component } from '@angular/core';
import { Post } from '../post.model';
import { Dataservice } from '../dataservice';
import { CommonModule, SlicePipe, UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [SlicePipe, CommonModule, UpperCasePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 httpposts: Post[] = [];

 constructor(private httpClient: Dataservice) {}

 ngOnInit() {
  this.httpClient.getPostsRemotely().subscribe(({data}) => {this.httpposts = data;});
 }
}

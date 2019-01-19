import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement, Reset } from '../counter.actions';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  count: number;

  constructor(private store: Store<{ count: number }>) { }

  ngOnInit() {
  	this.store.pipe(select('count')).subscribe(count => {
  		this.count = count;
  	});
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-szapp',
  templateUrl: './szapp.component.html',
  styleUrls: ['./szapp.component.css']
})
export class SzappComponent implements OnInit {

  images: Observable<any[]>;
  autoPlay: boolean = true;

  constructor(db: AngularFirestore) {
  	this.images = db.collection('images', ref => ref.where('reference', '==', 'szapp').orderBy('order')).valueChanges();
   }

  ngOnInit() {
  }

  toggleAutoPlay(){
  	this.autoPlay = !this.autoPlay
  }

}

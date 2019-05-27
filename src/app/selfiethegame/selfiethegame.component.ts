import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selfiethegame',
  templateUrl: './selfiethegame.component.html',
  styleUrls: ['./selfiethegame.component.css']
})
export class SelfiethegameComponent implements OnInit {

  images: Observable<any[]>;
  autoPlay: boolean = true;

  constructor(db: AngularFirestore) {
  	this.images = db.collection('images', ref => ref.where('reference', '==', 'selfiethegame').orderBy('order')).valueChanges();
   }

  ngOnInit() {
  }

  toggleAutoPlay(){
  	this.autoPlay = !this.autoPlay
  }

}

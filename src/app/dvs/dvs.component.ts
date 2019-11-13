import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dvs',
  templateUrl: './dvs.component.html',
  styleUrls: ['./dvs.component.css']
})
export class DvsComponent implements OnInit {

  images: Observable<any[]>;
  autoPlay: boolean = true;

  constructor(db: AngularFirestore) {
  	this.images = db.collection('images', ref => ref.where('reference', '==', 'dvs').orderBy('order')).valueChanges();
   }

  ngOnInit() {
  }

  toggleAutoPlay(){
  	this.autoPlay = !this.autoPlay
  }

}

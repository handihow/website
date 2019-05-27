import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pillars',
  templateUrl: './pillars.component.html',
  styleUrls: ['./pillars.component.css']
})
export class PillarsComponent implements OnInit {
  
  images: Observable<any[]>;
  autoPlay: boolean = true;

  constructor(db: AngularFirestore) {
  	this.images = db.collection('images', ref => ref.where('reference', '==', 'pillars').orderBy('order')).valueChanges();
   }

  ngOnInit() {
  }

  toggleAutoPlay(){
  	this.autoPlay = !this.autoPlay
  }

}

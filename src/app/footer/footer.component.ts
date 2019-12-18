import { Component, OnInit, HostListener, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement, Reset } from '../counter.actions';

import { ThirdSecretDialogComponent } from '../third-secret-dialog/third-secret-dialog.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  count: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setTiles(window.innerWidth);
    
  }
  
  tiles: Tile[] = [];

  constructor(public dialog: MatDialog, private store: Store<{ count: number }>) { }

  ngOnInit() {
    this.setTiles(window.innerWidth);
    this.store.pipe(select('count')).subscribe(count => {
      this.count = count;
    });
  }

  //set the displayed columns of the table depending on the size of the display
  setTiles(innerWidth){
    if(innerWidth > 800){
      this.tiles = [
        {text: 'H A N D I H O W', cols: 3, rows: 1, color: '#263238'},
        {text: 'Capelle aan den IJssel', cols: 1, rows: 2, color: '#C2185B'},
        {text: '+31647941981', cols: 1, rows: 1, color: '#C2185B'},
        {text: 'office@handihow.com', cols: 2, rows: 1, color: '#F44336'},
        {text: 'KvK-nummer 68836066', cols: 2, rows: 1, color: '#263238'},
        {text: 'BTW-nummer NL173458051B01', cols: 2, rows: 1, color: '#F44336'},
      ];
    } else {
      this.tiles = [
        {text: 'H A N D I H O W', cols: 2, rows: 1, color: '#263238'},
        {text: 'Capelle aan den IJssel', cols: 2, rows: 1, color: '#C2185B'},
        {text: '+31647941981', cols: 2, rows: 1, color: '#C2185B'},
        {text: 'office@handihow.com', cols: 2, rows: 1, color: '#F44336'},
        {text: 'KvK-nummer 68836066', cols: 2, rows: 1, color: '#263238'},
        {text: 'BTW-nummer NL173458051B01', cols: 2, rows: 1, color: '#F44336'},
      ];
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ThirdSecretDialogComponent, {
      width: '600px',
      data: {secret: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 11){
        this.store.dispatch(new Increment());
      }
      
    });
  }

}

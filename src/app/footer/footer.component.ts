import { Component, OnInit, HostListener } from '@angular/core';

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

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setTiles(window.innerWidth);
    
  }
  
  tiles: Tile[] = [];

  constructor() { }

  ngOnInit() {
    this.setTiles(window.innerWidth);
  }

  //set the displayed columns of the table depending on the size of the display
  setTiles(innerWidth){
    if(innerWidth > 800){
      this.tiles = [
        {text: 'H A N D I H O W', cols: 3, rows: 1, color: '#3F51B5'},
        {text: 'Capelle aan den IJssel', cols: 1, rows: 2, color: '#E91E63'},
        {text: '0647941981', cols: 1, rows: 1, color: '#E91E63'},
        {text: 'office@handihow.com', cols: 2, rows: 1, color: '#F44336'},
      ];
    } else {
      this.tiles = [
        {text: 'H A N D I H O W', cols: 2, rows: 1, color: '#3F51B5'},
        {text: 'Capelle aan den IJssel', cols: 2, rows: 1, color: '#E91E63'},
        {text: '0647941981', cols: 2, rows: 1, color: '#E91E63'},
        {text: 'office@handihow.com', cols: 2, rows: 1, color: '#F44336'},
      ];
    }
  }

}

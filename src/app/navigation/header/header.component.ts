import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement, Reset } from '../../counter.actions';

import { FirstSecretDialogComponent } from '../../first-secret-dialog/first-secret-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  count: number;

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(public dialog: MatDialog, private store: Store<{ count: number }>) { }

  ngOnInit() {
    this.store.pipe(select('count')).subscribe(count => {
      this.count = count;
    });
  }

  onToggleSidenav(){
  	this.sidenavToggle.emit()
  }

  onLogout(){
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FirstSecretDialogComponent, {
      width: '600px',
      data: {secret: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 74658){
        this.store.dispatch(new Increment());
      }
      
    });
  }

}

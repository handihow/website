import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement, Reset } from '../counter.actions';

import { SecondSecretDialogComponent } from '../second-secret-dialog/second-secret-dialog.component';


@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html',
  styleUrls: ['./strengths.component.css']
})
export class StrengthsComponent implements OnInit {
  
  count: number;
  strengths = [
    {strength: "Strategisch meedenken", value: 96, color: "accent"},
    {strength: "Kennis en ervaring", value: 92, color: "accent"},
    {strength: "Korte lijnen, toegewijd en praktisch", value: 94, color: "accent"},
    {strength: "Werken in het openbaar op GitHub", value: 100, color: "accent"},
    {strength: "Gebruik van de nieuwste technologie met hoge ontwikkelsnelheid", value: 99, color: "accent"},
    {strength: "Ondersteuning van start tot oplevering", value: 95, color: "accent"},
    {strength: "Waarna aanbod voor kosteneffectief onderhoud en doorontwikkeling", value: 98, color: "accent"}
   ];
  competitionNumber: number = 0;

  constructor(public dialog: MatDialog, private store: Store<{ count: number }>) { }

  ngOnInit() {
  	this.store.pipe(select('count')).subscribe(count => {
      this.count = count;
    });
  }

  onRandomValues(): void {
    this.competitionNumber += 1;
    this.strengths.forEach(function(strength){
      strength.value = Math.round(Math.random() * 100);
      strength.color = "warn";
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SecondSecretDialogComponent, {
      width: '600px',
      data: {secret: null}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result.trim().toLowerCase() === 'wand'){
        this.store.dispatch(new Increment());
      } else {
        this.store.dispatch(new Decrement());
      }
      
    });
  }

}

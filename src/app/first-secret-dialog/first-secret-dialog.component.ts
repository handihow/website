import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  secret: number
}

@Component({
  selector: 'app-first-secret-dialog',
  templateUrl: './first-secret-dialog.component.html',
  styleUrls: ['./first-secret-dialog.component.css']
})
export class FirstSecretDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<FirstSecretDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onFillAnswer(): void {
    this.data.secret = 74658;
  }

}

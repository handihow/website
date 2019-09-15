import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  secret: number;
}

@Component({
  selector: 'app-third-secret-dialog',
  templateUrl: './third-secret-dialog.component.html',
  styleUrls: ['./third-secret-dialog.component.css']
})
export class ThirdSecretDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ThirdSecretDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onFillAnswer(): void {
    this.data.secret = 11;
  }

}

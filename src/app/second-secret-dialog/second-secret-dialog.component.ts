import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  secret: string;
}

@Component({
  selector: 'app-second-secret-dialog',
  templateUrl: './second-secret-dialog.component.html',
  styleUrls: ['./second-secret-dialog.component.css']
})
export class SecondSecretDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SecondSecretDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onFillAnswer(): void {
    this.data.secret = "Wand"
  }

}

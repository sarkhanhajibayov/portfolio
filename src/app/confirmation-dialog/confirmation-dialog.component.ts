import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent {
  faXmark = faXmark;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar
  ) {}

  openSnackbar() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      panelClass: 'success-snackbar',
    });
  }
}

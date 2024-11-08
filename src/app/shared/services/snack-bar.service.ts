import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  showSuccessMessage(msg : string): void {
    this.snackBar.open(msg, 'Close', {
      duration: 3000, 
      panelClass: ['snackbar-success'] 
    });
  }

  showErrorMessage(msg : string): void {
    this.snackBar.open(msg, 'Close', {
      duration: 3000,
      panelClass: ['snackbar-error']
    });
  }
}

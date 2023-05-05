// src/app/dialogs/forgot-password-dialog.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.scss']
})
export class ForgotPasswordDialogComponent implements OnInit {
  email: string = '';

  constructor(
    private authService: AuthService,
    private dialogRef: MatDialogRef<ForgotPasswordDialogComponent>
  ) {}

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.authService.forgotPassword(this.email).subscribe((result) => {
      if (result) {
        // TODO: Display success message
        this.dialogRef.close();
      } else {
        // TODO: Display error message
      }
    });
  }
}
// <!-- src/app/dialogs/forgot-password-dialog.component.html -->
// <h2 mat-dialog-title>パスワードを忘れた場合</h2>
// <div mat-dialog-content>
//   <p>パスワードをリセットするためのリンクを送信します。</p>
//   <form>
//     <mat-form-field>
//       <mat-label>メールアドレス</mat-label>
//       <input matInput type="email" [(ngModel)]="email" name="email" required />
//     </mat-form-field>
//   </form>
// </div>
// <div mat-dialog-actions>
//   <button mat-button (click)="onCancel()">キャンセル</button>
//   <button mat-button color="primary" (click)="onSubmit()">送信</button>
// </div>
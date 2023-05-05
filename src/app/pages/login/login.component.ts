// src/app/pages/login.component.ts
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ForgotPasswordDialogComponent } from '../../dialogs/forgot-password-dialog/forgot-password-dialog.component';
import { User } from '../../models';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;
    errorMessage: string;

    constructor(private authService: AuthService, private router: Router, private dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    onSubmit(loginForm: NgForm): void {
        if (loginForm.valid) {
            this.authService.login(this.username, this.password).subscribe(
                (user: User) => {
                    // TODO: Redirect to dashboard
                    this.router.navigate(['/dashboard']);
                },
                (error: any) => {
                    this.errorMessage = 'Invalid username or password.';
                }
            );
        } else {
            if (loginForm.controls['username'].invalid) {
                this.errorMessage = 'Please enter your username.';
            } else if (loginForm.controls['password'].invalid) {
                this.errorMessage = 'Please enter your password.';
            }
        }
    }

    openForgotPasswordDialog(): void {
        const dialogRef = this.dialog.open(ForgotPasswordDialogComponent, {
            width: '400px',
            data: { email: '' }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                // TODO: Call forgotPassword method of AuthService
                this.authService.forgotPassword(result.email).subscribe();
            }
        });
    }
}
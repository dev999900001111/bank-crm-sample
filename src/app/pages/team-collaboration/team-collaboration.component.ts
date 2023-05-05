// src/app/pages/team-collaboration.component.ts
import { Component, OnInit } from '@angular/core';
import { User, SharedInformation, InfoCategory } from '../../models';
import { CollaborationService, UserService } from '../../services';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-team-collaboration',
    templateUrl: './team-collaboration.component.html',
    styleUrls: ['./team-collaboration.component.scss']
})
export class TeamCollaborationComponent implements OnInit {
    teamMembers: User[] = [];
    sharedInfo: SharedInformation[] = [];
    searchTeamMemberForm: FormGroup;
    searchSharedInfoForm: FormGroup;
    addSharedInfoForm: FormGroup;

    constructor(private collaborationService: CollaborationService, private userService: UserService, private dialog: MatDialog, private fb: FormBuilder) {
        this.searchTeamMemberForm = this.fb.group({
            query: ['']
        });
        this.searchSharedInfoForm = this.fb.group({
            query: ['']
        });
        this.addSharedInfoForm = this.fb.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            category: ['', Validators.required]
        });
    }

    ngOnInit(): void {
        this.userService.getTeamMembers().subscribe((teamMembers: User[]) => {
            this.teamMembers = teamMembers;
        });
        this.collaborationService.getSharedInformation().subscribe((sharedInfo: SharedInformation[]) => {
            this.sharedInfo = sharedInfo;
        });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(AddSharedInfoDialogComponent, {
            width: '400px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.collaborationService.shareInformation(result).subscribe((sharedInfo: SharedInformation) => {
                    this.sharedInfo.push(sharedInfo);
                });
            }
        });
    }

    searchTeamMembers(): void {
        const query = this.searchTeamMemberForm.get('query').value.toLowerCase();
        if (query) {
            // this.collaborationService.searchTeamMembers(query).subscribe((teamMembers: User[]) => {
            //     this.teamMembers = teamMembers;
            // });
        } else {
            this.userService.getTeamMembers().subscribe((teamMembers: User[]) => {
                this.teamMembers = teamMembers;
            });
        }
    }

    searchSharedInfo(): void {
        const query = this.searchSharedInfoForm.get('query').value.toLowerCase();
        if (query) {
            // this.collaborationService.searchSharedInformation(query).subscribe((sharedInfo: SharedInformation[]) => {
            //     this.sharedInfo = sharedInfo;
            // });
        } else {
            this.collaborationService.getSharedInformation().subscribe((sharedInfo: SharedInformation[]) => {
                this.sharedInfo = sharedInfo;
            });
        }
    }
}

@Component({
    selector: 'app-add-shared-info-dialog',
    template: `
        <h2 mat-dialog-title>Add Shared Information</h2>
        <form [formGroup]="addSharedInfoForm" (ngSubmit)="onSubmit()">
            <mat-dialog-content>
                <mat-form-field>
                    <input matInput placeholder="Title" formControlName="title">
                    <mat-error *ngIf="addSharedInfoForm.get('title').hasError('required')">Title is required</mat-error>
                </mat-form-field>
                <mat-form-field>
                    <textarea matInput placeholder="Description" formControlName="description"></textarea>
                    <mat-error *ngIf="addSharedInfoForm.get('description').hasError('required')">Description is required</mat-error>
                </mat-form-field>
                <mat-form-field>
                    <mat-label>Category</mat-label>
                    <mat-select formControlName="category">
                        <mat-option *ngFor="let category of categories" [value]="category">{{category}}</mat-option>
                    </mat-select>
                    <mat-error *ngIf="addSharedInfoForm.get('category').hasError('required')">Category is required</mat-error>
                </mat-form-field>
            </mat-dialog-content>
            <mat-dialog-actions>
                <button mat-button (click)="onCancel()">Cancel</button>
                <button mat-button color="primary" type="submit" [disabled]="addSharedInfoForm.invalid">Add</button>
            </mat-dialog-actions>
        </form>
    `
})
export class AddSharedInfoDialogComponent {
    categories: InfoCategory[] = Object.values(InfoCategory);
    addSharedInfoForm: FormGroup;

    constructor(private fb: FormBuilder, private dialog: MatDialogRef<any>) {
        this.addSharedInfoForm = this.fb.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            category: ['', Validators.required]
        });
    }

    onSubmit(): void {
        const sharedInfo: SharedInformation = {
            id: 0,
            userId: 0,
            title: this.addSharedInfoForm.get('title').value,
            description: this.addSharedInfoForm.get('description').value,
            date: new Date(),
            category: this.addSharedInfoForm.get('category').value
        };
        this.dialog.close(sharedInfo);
    }

    onCancel(): void {
        this.dialog.close();
    }
}
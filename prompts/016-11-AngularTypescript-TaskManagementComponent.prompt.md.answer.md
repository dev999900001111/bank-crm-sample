```typescript
// src/app/pages/task-management.component.ts
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task, Reminder, TaskStatus } from '../../models';
import { TaskService } from '../../services';

@Component({
    selector: 'app-task-management',
    templateUrl: './task-management.component.html',
    styleUrls: ['./task-management.component.scss']
})
export class TaskManagementComponent implements OnInit {
    tasks: Task[] = [];
    displayedColumns: string[] = ['title', 'description', 'startDate', 'endDate', 'status', 'actions'];
    selectedTask: Task;

    taskDetailsDialogTemplate: TemplateRef<any>;

    constructor(private taskService: TaskService, private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getTasks();
    }

    openTaskDetailsDialog(task: Task): void {
        this.selectedTask = task;
        const dialogRef = this.dialog.open(this.taskDetailsDialogTemplate, {
            width: '500px',
            data: { task: this.selectedTask }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.selectedTask = null;
        });
    }

    editTask(task: Task): void {
        this.selectedTask = task;
    }

    onTaskChange(task: Task): void {
        if (task.id) {
            this.taskService.updateTask(task).subscribe(() => {
                this.getTasks();
            });
        } else {
            this.taskService.createTask(task).subscribe(() => {
                this.getTasks();
            });
        }
        this.selectedTask = null;
    }

    closeDialog(): void {
        this.selectedTask = null;
    }

    private getTasks(): void {
        this.taskService.getTasks().subscribe(tasks => {
            this.tasks = tasks;
        });
    }
}
```

```html
<!-- src/app/pages/task-management.component.html -->
<div class="task-management-container">
    <div class="task-list-container">
        <mat-card>
            <mat-table [dataSource]="tasks">
                <ng-container matColumnDef="title">
                    <mat-header-cell *matHeaderCellDef>Title</mat-header-cell>
                    <mat-cell *matCellDef="let task">{{ task.title }}</mat-cell>
                </ng-container>
                <ng-container matColumnDef="description">
                    <mat-header-cell *matHeaderCellDef>Description</mat-header-cell>
                    <mat-cell *matCellDef="let task">{{ task.description }}</mat-cell>
                </ng-container>
                <ng-container matColumnDef="startDate">
                    <mat-header-cell *matHeaderCellDef>Start Date</mat-header-cell>
                    <mat-cell *matCellDef="let task">{{ task.startDate | date }}</mat-cell>
                </ng-container>
                <ng-container matColumnDef="endDate">
                    <mat-header-cell *matHeaderCellDef>End Date</mat-header-cell>
                    <mat-cell *matCellDef="let task">{{ task.endDate | date }}</mat-cell>
                </ng-container>
                <ng-container matColumnDef="status">
                    <mat-header-cell *matHeaderCellDef>Status</mat-header-cell>
                    <mat-cell *matCellDef="let task">{{ task.status }}</mat-cell>
                </ng-container>
                <ng-container matColumnDef="actions">
                    <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>
                    <mat-cell *matCellDef="let task">
                        <button mat-icon-button color="primary" (click)="editTask(task)">
                            <mat-icon>edit</mat-icon>
                        </button>
                        <button mat-icon-button color="primary" (click)="openTaskDetailsDialog(task)">
                            <mat-icon>info</mat-icon>
                        </button>
                    </mat-cell>
                </ng-container>
                <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
                <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
            </mat-table>
        </mat-card>
    </div>
    <div class="task-form-container">
        <mat-card>
            <app-task-form [task]="selectedTask" (taskChange)="onTaskChange($event)"></app-task-form>
        </mat-card>
    </div>
</div>

<ng-template #taskDetailsDialog let-data>
    <h2 mat-dialog-title>Task Details</h2>
    <mat-dialog-content>
        <p><strong>Title:</strong> {{ data.task.title }}</p>
        <p><strong>Description:</strong> {{ data.task.description }}</p>
        <p><strong>Start Date:</strong> {{ data.task.startDate | date }}</p>
        <p><strong>End Date:</strong> {{ data.task.endDate | date }}</p>
        <p><strong>Status:</strong> {{ data.task.status }}</p>
        <p><strong>Reminder:</strong> {{ data.task.reminder?.message }}</p>
    </mat-dialog-content>
    <mat-dialog-actions>
        <button mat-button (click)="closeDialog()">Close</button>
    </mat-dialog-actions>
</ng-template>
```
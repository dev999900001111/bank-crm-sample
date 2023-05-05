```typescript
// src/app/parts/task-list.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from '../../models';
import { TaskService } from '../../services';
import { TaskDetailsDialogComponent } from '../dialogs/task-details-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

    @Input() tasks: Task[];

    displayedColumns: string[] = ['title', 'description', 'startDate', 'endDate', 'status', 'actions'];

    constructor(private taskService: TaskService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
    }

    openTaskDetailsDialog(task: Task): void {
        const dialogRef = this.dialog.open(TaskDetailsDialogComponent, {
            width: '500px',
            data: { task }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.taskService.updateTask(result).subscribe(updatedTask => {
                    const index = this.tasks.findIndex(t => t.id === updatedTask.id);
                    this.tasks[index] = updatedTask;
                    this.snackBar.open('Task updated successfully', 'Close', { duration: 3000 });
                });
            }
        });
    }

    deleteTask(task: Task): void {
        if (confirm('Are you sure you want to delete this task?')) {
            this.taskService.deleteTask(task.id).subscribe(() => {
                const index = this.tasks.findIndex(t => t.id === task.id);
                this.tasks.splice(index, 1);
                this.snackBar.open('Task deleted successfully', 'Close', { duration: 3000 });
            });
        }
    }

    addTask(): void {
        const dialogRef = this.dialog.open(TaskDetailsDialogComponent, {
            width: '500px',
            data: { task: null }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.taskService.createTask(result).subscribe(newTask => {
                    this.tasks.push(newTask);
                    this.snackBar.open('Task added successfully', 'Close', { duration: 3000 });
                });
            }
        });
    }

}
```
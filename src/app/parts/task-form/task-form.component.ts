// src/app/parts/task-form.component.ts
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Task } from '../../models';
import { TaskService } from '../../services';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

    @Input() task: Task = {} as Task;
    @Output() taskChange: EventEmitter<Task> = new EventEmitter<Task>();

    @ViewChild('taskForm') taskForm: NgForm;
    @ViewChild('startDatePicker') startDatePicker: MatDatepicker<Date>;
    @ViewChild('endDatePicker') endDatePicker: MatDatepicker<Date>;

    constructor(private taskService: TaskService) {
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        if (this.taskForm.valid) {
            const task: Task = {
                ...this.taskForm.value,
                id: this.task ? this.task.id : null
            };
            if (this.task) {
                this.taskService.updateTask(task).subscribe(updatedTask => {
                    this.taskChange.emit(updatedTask);
                });
            } else {
                this.taskService.createTask(task).subscribe(newTask => {
                    this.taskChange.emit(newTask);
                });
            }
        }
        this.taskForm.resetForm();
    }

    onCancel(): void {
        this.taskForm.resetForm();
        this.taskChange.emit({} as Task);
    }

}
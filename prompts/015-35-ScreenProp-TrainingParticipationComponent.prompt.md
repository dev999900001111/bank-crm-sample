# html
```html
<div class="card">
  <h2 class="title">{{training.title}}</h2>
  <p class="description">{{training.description}}</p>
  <p class="date">{{training.startDate | date: 'yyyy年MM月dd日'}} - {{training.endDate | date: 'yyyy年MM月dd日'}}</p>
  <p class="participants">{{training.participants.length}}人が参加中</p>
  <button class="participate-button" (click)="participate()">{{training.status === 'UPCOMING' ? '参加する' : '参加中'}}</button>
  <mat-progress-bar class="progress-bar" mode="determinate" [value]="calculateProgress()"></mat-progress-bar>
</div>
```

# prompt
The above html is an Angular template.
Please list all "variables", "constants", "ViewChild", and "functions" needed to create the ts. mat-table's column names are also "constants".
The format should be name, type, description.

# html
```html
<app-header [user]="user"></app-header>
<app-side-menu></app-side-menu>

<mat-card class="dashboard-card">
  <mat-card-header>
    <mat-card-title>ダッシュボード</mat-card-title>
  </mat-card-header>

  <mat-card-content>
    <div class="kpi-section">
      <div class="kpi-item">
        <div class="kpi-value">{{totalSalesAmount}}</div>
        <div class="kpi-label">総売上高</div>
      </div>
      <div class="kpi-item">
        <div class="kpi-value">{{salesGoalProgress}}%</div>
        <div class="kpi-label">目標達成率</div>
      </div>
      <div class="kpi-item">
        <div class="kpi-value">{{customerSatisfactionRate}}%</div>
        <div class="kpi-label">顧客満足度</div>
      </div>
    </div>

    <div class="recent-activities-section">
      <h3>最近のアクティビティ</h3>
      <table>
        <thead>
          <tr>
            <th>日付</th>
            <th>タイトル</th>
            <th>種類</th>
            <th>ステータス</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let activity of recentActivities">
            <td>{{activity.date | date: 'yyyy/MM/dd'}}</td>
            <td>{{activity.title}}</td>
            <td>{{activity.type}}</td>
            <td>{{activity.status}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="upcoming-tasks-section">
      <h3>今後のタスク</h3>
      <table>
        <thead>
          <tr>
            <th>期限</th>
            <th>タイトル</th>
            <th>ステータス</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let task of upcomingTasks">
            <td>{{task.endDate | date: 'yyyy/MM/dd'}}</td>
            <td>{{task.title}}</td>
            <td>{{task.status}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </mat-card-content>
</mat-card>
```

# prompt
The above html is an Angular template.
Please list all "variables", "constants", "ViewChild", and "functions" needed to create the ts. mat-table's column names are also "constants".
The format should be name, type, description.

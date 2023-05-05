```
<div class="kpi-overview-container">
  <mat-card class="kpi-card">
    <mat-list>
      <h3 mat-subheader>売上</h3>
      <mat-list-item>
        <div mat-list-avatar class="kpi-icon">
          <mat-icon>attach_money</mat-icon>
        </div>
        <div mat-line class="kpi-name">総売上</div>
        <div mat-line class="kpi-value">{{kpis[0].value | number:'1.0-0'}}</div>
        <div mat-line class="kpi-target">目標: {{kpis[0].target | number:'1.0-0'}}</div>
      </mat-list-item>
      <mat-list-item>
        <div mat-list-avatar class="kpi-icon">
          <mat-icon>shopping_cart</mat-icon>
        </div>
        <div mat-line class="kpi-name">平均単価</div>
        <div mat-line class="kpi-value">{{kpis[1].value | number:'1.0-0'}}</div>
        <div mat-line class="kpi-target">目標: {{kpis[1].target | number:'1.0-0'}}</div>
      </mat-list-item>
      <mat-list-item>
        <div mat-list-avatar class="kpi-icon">
          <mat-icon>person</mat-icon>
        </div>
        <div mat-line class="kpi-name">顧客数</div>
        <div mat-line class="kpi-value">{{kpis[2].value | number:'1.0-0'}}</div>
        <div mat-line class="kpi-target">目標: {{kpis[2].target | number:'1.0-0'}}</div>
      </mat-list-item>
      <mat-list-item>
        <div mat-list-avatar class="kpi-icon">
          <mat-icon>store</mat-icon>
        </div>
        <div mat-line class="kpi-name">新規顧客数</div>
        <div mat-line class="kpi-value">{{kpis[3].value | number:'1.0-0'}}</div>
        <div mat-line class="kpi-target">目標: {{kpis[3].target | number:'1.0-0'}}</div>
      </mat-list-item>
      <mat-list-item>
        <div mat-list-avatar class="kpi-icon">
          <mat-icon>repeat</mat-icon>
        </div>
        <div mat-line class="kpi-name">リピート率</div>
        <div mat-line class="kpi-value">{{kpis[4].value | percent:'1.0-0'}}</div>
        <div mat-line class="kpi-target">目標: {{kpis[4].target | percent:'1.0-0'}}</div>
      </mat-list-item>
    </mat-list>
  </mat-card>
</div>
```
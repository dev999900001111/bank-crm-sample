# html
```html
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <mat-card>
        <mat-card-title>請求と問い合わせ</mat-card-title>
        <mat-card-content>
          <mat-table [dataSource]="claims">
            <ng-container matColumnDef="id">
              <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>
              <mat-cell *matCellDef="let claim"> {{claim.id}} </mat-cell>
            </ng-container>
            <ng-container matColumnDef="title">
              <mat-header-cell *matHeaderCellDef> タイトル </mat-header-cell>
              <mat-cell *matCellDef="let claim"> {{claim.title}} </mat-cell>
            </ng-container>
            <ng-container matColumnDef="date">
              <mat-header-cell *matHeaderCellDef> 日付 </mat-header-cell>
              <mat-cell *matCellDef="let claim"> {{claim.date | date}} </mat-cell>
            </ng-container>
            <ng-container matColumnDef="status">
              <mat-header-cell *matHeaderCellDef> ステータス </mat-header-cell>
              <mat-cell *matCellDef="let claim"> {{claim.status}} </mat-cell>
            </ng-container>
            <mat-header-row *matHeaderRowDef="['id', 'title', 'date', 'status']"></mat-header-row>
            <mat-row *matRowDef="let claim; columns: ['id', 'title', 'date', 'status']" (click)="showClaimDetails(claim)"></mat-row>
          </mat-table>
        </mat-card-content>
      </mat-card>
    </div>
    <div class="col-md-6">
      <mat-card *ngIf="selectedClaim">
        <mat-card-title>請求と問い合わせの詳細</mat-card-title>
        <mat-card-content>
          <p><strong>ID:</strong> {{selectedClaim.id}}</p>
          <p><strong>タイトル:</strong> {{selectedClaim.title}}</p>
          <p><strong>日付:</strong> {{selectedClaim.date | date}}</p>
          <p><strong>ステータス:</strong> {{selectedClaim.status}}</p>
          <p><strong>説明:</strong> {{selectedClaim.description}}</p>
          <p><strong>回答:</strong> {{selectedClaim.response}}</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="primary" (click)="showClaimResponseDialog()">回答する</button>
        </mat-card-actions>
      </mat-card>
    </div>
  </div>
</div>

<app-claim-response-dialog [claim]="selectedClaim" (claimChange)="updateClaim($event)"></app-claim-response-dialog>
```

# prompt
The above html is an Angular template.
Please list all "variables", "constants", "ViewChild", and "functions" needed to create the ts. mat-table's column names are also "constants".
The format should be name, type, description.

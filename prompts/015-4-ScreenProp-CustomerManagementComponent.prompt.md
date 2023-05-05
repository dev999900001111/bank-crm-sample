# html
```html
<div class="customer-management-container">
  <div class="customer-list-container">
    <mat-card>
      <mat-card-title>顧客リスト</mat-card-title>
      <mat-card-content>
        <mat-form-field>
          <input matInput placeholder="検索">
        </mat-form-field>
        <mat-form-field>
          <mat-label>セグメント</mat-label>
          <mat-select>
            <mat-option value="premium">プレミアム</mat-option>
            <mat-option value="standard">スタンダード</mat-option>
            <mat-option value="basic">ベーシック</mat-option>
          </mat-select>
        </mat-form-field>
        <table mat-table [dataSource]="customers" class="mat-elevation-z8">
          <ng-container matColumnDef="firstName">
            <th mat-header-cell *matHeaderCellDef>名</th>
            <td mat-cell *matCellDef="let customer">{{customer.firstName}}</td>
          </ng-container>
          <ng-container matColumnDef="lastName">
            <th mat-header-cell *matHeaderCellDef>姓</th>
            <td mat-cell *matCellDef="let customer">{{customer.lastName}}</td>
          </ng-container>
          <ng-container matColumnDef="email">
            <th mat-header-cell *matHeaderCellDef>メールアドレス</th>
            <td mat-cell *matCellDef="let customer">{{customer.email}}</td>
          </ng-container>
          <ng-container matColumnDef="segment">
            <th mat-header-cell *matHeaderCellDef>セグメント</th>
            <td mat-cell *matCellDef="let customer">{{customer.segment}}</td>
          </ng-container>
          <tr mat-header-row *matHeaderRowDef="['firstName', 'lastName', 'email', 'segment']"></tr>
          <tr mat-row *matRowDef="let row; columns: ['firstName', 'lastName', 'email', 'segment']" (click)="onCustomerSelected(row)"></tr>
        </table>
      </mat-card-content>
    </mat-card>
  </div>
  <div class="customer-form-container">
    <mat-card>
      <mat-card-title>{{selectedCustomer ? '顧客情報編集' : '新規顧客登録'}}</mat-card-title>
      <mat-card-content>
        <app-customer-form [customer]="selectedCustomer" (customerChange)="onCustomerChange($event)"></app-customer-form>
      </mat-card-content>
    </mat-card>
  </div>
</div>
```

# prompt
The above html is an Angular template.
Please list all "variables", "constants", "ViewChild", and "functions" needed to create the ts. mat-table's column names are also "constants".
The format should be name, type, description.

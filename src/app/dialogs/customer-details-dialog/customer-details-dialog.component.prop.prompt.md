# html
```html
<mat-card>
  <mat-card-header>
    <mat-card-title>{{customer.firstName}} {{customer.lastName}}</mat-card-title>
    <button mat-icon-button matTooltip="Close" (click)="closeDialog()">
      <mat-icon>close</mat-icon>
    </button>
  </mat-card-header>
  <mat-card-content>
    <mat-list>
      <h3 mat-subheader>Personal Information</h3>
      <mat-list-item>
        <div mat-list-avatar>
          <mat-icon>person</mat-icon>
        </div>
        <div mat-line>Phone</div>
        <div mat-line>{{customer.phone}}</div>
      </mat-list-item>
      <mat-list-item>
        <div mat-list-avatar>
          <mat-icon>email</mat-icon>
        </div>
        <div mat-line>Email</div>
        <div mat-line>{{customer.email}}</div>
      </mat-list-item>
      <mat-list-item>
        <div mat-list-avatar>
          <mat-icon>home</mat-icon>
        </div>
        <div mat-line>Address</div>
        <div mat-line>{{customer.address}}</div>
      </mat-list-item>
      <mat-divider></mat-divider>
      <h3 mat-subheader>Transaction History</h3>
      <mat-list-item *ngFor="let sale of sales">
        <div mat-list-avatar>
          <mat-icon>shopping_cart</mat-icon>
        </div>
        <div mat-line>{{sale.product}}</div>
        <div mat-line>{{sale.amount | currency}}</div>
        <div mat-line>{{sale.date | date:'medium'}}</div>
      </mat-list-item>
      <mat-divider></mat-divider>
      <h3 mat-subheader>Sales Performance</h3>
      <mat-list-item *ngFor="let data of salesData">
        <div mat-list-avatar>
          <mat-icon>bar_chart</mat-icon>
        </div>
        <div mat-line>{{data.date | date:'medium'}}</div>
        <div mat-line>{{data.amount | currency}}</div>
      </mat-list-item>
    </mat-list>
  </mat-card-content>
</mat-card>
```

# prompt
The above html is an Angular template.
Please list all "variables", "constants", "ViewChild", and "functions" needed to create the ts. mat-table's column names are also "constants".
The format should be name, type, description.

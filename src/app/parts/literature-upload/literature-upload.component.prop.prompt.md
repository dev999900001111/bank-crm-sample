# html
```html
<div class="container">
  <h2 class="title">文献アップロード</h2>
  <form (ngSubmit)="onSubmit()" #literatureForm="ngForm">
    <mat-form-field>
      <mat-label>タイトル</mat-label>
      <input matInput required [(ngModel)]="title" name="title">
      <mat-error *ngIf="literatureForm.controls['title'].invalid && literatureForm.controls['title'].touched">タイトルは必須です。</mat-error>
    </mat-form-field>
    <mat-form-field>
      <mat-label>説明</mat-label>
      <input matInput [(ngModel)]="description" name="description">
    </mat-form-field>
    <mat-form-field>
      <mat-label>ファイル</mat-label>
      <input matInput type="file" (change)="onFileSelected($event)" accept=".pdf,.docx,.xlsx,.pptx" required>
      <mat-error *ngIf="literatureForm.controls['file'].invalid && literatureForm.controls['file'].touched">ファイルは必須です。</mat-error>
      <mat-error *ngIf="fileTypeError">ファイルタイプがサポートされていません。</mat-error>
    </mat-form-field>
    <button mat-raised-button color="primary" type="submit" [disabled]="!literatureForm.valid || fileTypeError">アップロード</button>
  </form>
  <div *ngIf="successMessage" class="success-message">{{successMessage}}</div>
  <div *ngIf="errorMessage" class="error-message">{{errorMessage}}</div>
</div>
```

# prompt
The above html is an Angular template.
Please list all "variables", "constants", "ViewChild", and "functions" needed to create the ts. mat-table's column names are also "constants".
The format should be name, type, description.

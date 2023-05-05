```
<h1 mat-dialog-title>文献詳細</h1>
<div mat-dialog-content>
  <mat-card>
    <mat-list>
      <mat-list-item>
        <h3 matLine>タイトル</h3>
        <p matLine>{{ literature.title }}</p>
      </mat-list-item>
      <mat-list-item>
        <h3 matLine>説明</h3>
        <p matLine>{{ literature.description }}</p>
      </mat-list-item>
      <mat-list-item>
        <h3 matLine>アップロード日</h3>
        <p matLine>{{ literature.uploadDate | date: 'yyyy/MM/dd' }}</p>
      </mat-list-item>
      <mat-list-item>
        <h3 matLine>ファイルタイプ</h3>
        <p matLine>{{ literature.fileType }}</p>
      </mat-list-item>
      <mat-list-item>
        <h3 matLine>ファイルURL</h3>
        <p matLine>{{ literature.fileUrl }}</p>
      </mat-list-item>
    </mat-list>
  </mat-card>
</div>
<div mat-dialog-actions>
  <button mat-button mat-dialog-close>閉じる</button>
</div>
```
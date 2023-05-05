import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { User } from './models';
import { AuthService, UserService } from './services';
import { MatMenu } from '@angular/material/menu';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() color: string;

  @ViewChild('userMenu') userMenu: MatMenu;
  @ViewChild('notificationsMenu') notificationsMenu: MatMenu;
  @ViewChild('license') license: TemplateRef<any>;


  routerLink = '/';
  matMenuTriggerFor = 'matMenuTriggerFor';
  matIcon = 'mat-icon';
  notificationItem = 'notification-item';
  notificationTitle = 'notification-title';
  notificationMessage = 'notification-message';
  user: User;
  notifications = [
    { icon: 'notifications', title: '新しいメッセージ', message: '山田様から新しいメッセージが届いています。', time: '12:34' },
    { icon: 'account_circle', title: '新しいタスク', message: '新しいタスクが割り当てられました。', time: '14:56' }
  ];

  licenses = [];

  constructor(private userService: UserService, private authService: AuthService, private router: Router, private httpClient: HttpClient, private dialog: MatDialog) {
    this.httpClient.get('assets/LICENSE.json').subscribe((config: any) => {
      this.licenses = config;
    });
    this.userService.getUserProfile().subscribe((user: User) => {
      this.user = user;
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.routerLink = event.url;
      }
    });
  }

  ngOnInit(): void {
  }

  openChangePasswordDialog(): void {
    // TODO: Implement method to open change password dialog
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  openLicense(): void {
    this.dialog.open(this.license, { width: '800px' });
  }
}

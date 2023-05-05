```typescript
// src/app/parts/header.component.ts
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { User } from '../../models';
import { AuthService } from '../../services';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() user: User;
    @Input() color: string;

    @ViewChild('userMenu') userMenu: MatMenu;
    @ViewChild('notificationsMenu') notificationsMenu: MatMenu;

    routerLink = '/';
    matMenuTriggerFor = 'matMenuTriggerFor';
    matIcon = 'mat-icon';
    notificationItem = 'notification-item';
    notificationTitle = 'notification-title';
    notificationMessage = 'notification-message';

    constructor(private authService: AuthService, private router: Router) {
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
}
```
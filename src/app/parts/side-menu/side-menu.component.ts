// src/app/parts/side-menu.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { AuthService, UserService } from '../../services';
import { User } from '../../models';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  isHandset$: Observable<boolean>;
  user: User;

  activeLink = '';
  columnNames: string[] = [];

  @ViewChild('drawer') drawer: MatSidenav;

  constructor(private authService: AuthService, private userService: UserService) {
    // this.isHandset$ = this.authService.isHandset$;
  }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(user => {
      this.user = user;
    });

    this.columnNames = ['id', 'name', 'status', 'date'];
  }

  ngAfterViewInit(): void {
    // this.isHandset$.subscribe(isHandset => {
    //   if (isHandset) {
    //     this.drawer.close();
    //   } else {
    //     this.drawer.open();
    //   }
    // });
  }

  toggleDrawer(): void {
    this.drawer.toggle();
  }
}
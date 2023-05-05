// src/app/parts/team-member-list.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models';
import { UserService } from '../../services';

@Component({
    selector: 'app-team-member-list',
    templateUrl: './team-member-list.component.html',
    styleUrls: ['./team-member-list.component.scss']
})
export class TeamMemberListComponent implements OnInit {

    @Input() teamMembers: User[];
    displayedColumns: string[] = ['name', 'email', 'role'];
    matH2 = 'mat-h2';
    matElevationZ8 = 'mat-elevation-z8';

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getTeamMembers().subscribe(
            (teamMembers: User[]) => {
                this.teamMembers = teamMembers;
            },
            (error: any) => {
                console.error(error);
                // TODO: Display error message to user
            }
        );
    }

    applyFilter(filterValue: string): void {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.teamMembers = this.teamMembers.filter((teamMember: User) => {
            return teamMember.firstName.toLowerCase().includes(filterValue) ||
                teamMember.lastName.toLowerCase().includes(filterValue) ||
                teamMember.email.toLowerCase().includes(filterValue);
        });
    }
}
```typescript
// src/app/pages/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { User, Sale, SalesGoal, Task, Claim } from '../../models';
import { SalesService, TaskService, ClaimsService } from '../../services';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    user: User;
    totalSalesAmount: number;
    salesGoalProgress: number;
    customerSatisfactionRate: number;
    recentActivities: { date: Date, title: string, type: string, status: string }[];
    upcomingTasks: { endDate: Date, title: string, status: string }[];

    constructor(private salesService: SalesService, private taskService: TaskService, private claimsService: ClaimsService) {
    }

    ngOnInit(): void {
        this.user = { id: 1, username: 'johndoe', password: 'password', email: 'johndoe@example.com', firstName: 'John', lastName: 'Doe', role: 'EMPLOYEE', profileImage: 'https://via.placeholder.com/150' };
        this.salesService.getSalesHistory().subscribe((sales: Sale[]) => {
            this.totalSalesAmount = sales.reduce((total, sale) => total + sale.amount, 0);
        });
        this.salesService.getSalesGoal().subscribe((salesGoal: SalesGoal) => {
            this.salesGoalProgress = (this.totalSalesAmount / salesGoal.targetAmount) * 100;
        });
        this.salesService.getKpis().subscribe((kpis) => {
            const customerSatisfactionKpi = kpis.find(kpi => kpi.name === 'Customer Satisfaction');
            this.customerSatisfactionRate = customerSatisfactionKpi ? customerSatisfactionKpi.value : 0;
        });
        this.taskService.getTasks().subscribe((tasks: Task[]) => {
            this.recentActivities = tasks.map(task => ({ date: task.endDate, title: task.title, type: 'Task', status: task.status }));
        });
        this.salesService.getSalesHistory().subscribe((sales: Sale[]) => {
            this.recentActivities = [...this.recentActivities, ...sales.map(sale => ({ date: sale.date, title: sale.product, type: 'Sale', status: sale.status }))];
        });
        this.claimsService.getClaims().subscribe((claims: Claim[]) => {
            this.recentActivities = [...this.recentActivities, ...claims.map(claim => ({ date: claim.date, title: claim.title, type: 'Claim', status: claim.status }))];
        });
        this.taskService.getTasks().subscribe((tasks: Task[]) => {
            this.upcomingTasks = tasks.filter(task => new Date(task.endDate).getTime() - new Date().getTime() <= 7 * 24 * 60 * 60 * 1000)
                .map(task => ({ endDate: task.endDate, title: task.title, status: task.status }));
        });
    }
}
```
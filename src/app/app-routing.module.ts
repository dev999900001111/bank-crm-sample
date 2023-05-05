
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClaimsHandlingComponent } from './pages/claims-handling/claims-handling.component';
import { CustomerManagementComponent } from './pages/customer-management/customer-management.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PerformanceReportingComponent } from './pages/performance-reporting/performance-reporting.component';
import { ReferenceManagementComponent } from './pages/reference-management/reference-management.component';
import { SalesLiteratureManagementComponent } from './pages/sales-literature-management/sales-literature-management.component';
import { SalesManagementComponent } from './pages/sales-management/sales-management.component';
import { TaskManagementComponent } from './pages/task-management/task-management.component';
import { TeamCollaborationComponent } from './pages/team-collaboration/team-collaboration.component';
import { TrainingManagementComponent } from './pages/training-management/training-management.component';

const routes: Routes = [
    { path: 'claims-handling', component: ClaimsHandlingComponent },
    { path: 'customer-management', component: CustomerManagementComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'performance-reporting', component: PerformanceReportingComponent },
    { path: 'reference-management', component: ReferenceManagementComponent },
    { path: 'sales-literature-management', component: SalesLiteratureManagementComponent },
    { path: 'sales-management', component: SalesManagementComponent },
    { path: 'task-management', component: TaskManagementComponent },
    { path: 'team-collaboration', component: TeamCollaborationComponent },
    { path: 'training-management', component: TrainingManagementComponent },
  { path: '**', redirectTo: 'login' } // 未定義のルートの場合はログインページにリダイレクトする
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

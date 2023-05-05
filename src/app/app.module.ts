import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';
// ロケールデータを登録
registerLocaleData(localeJa);

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { NgChartsModule } from 'ng2-charts';
import 'chartjs-adapter-moment';
import { MatTimepickerModule } from 'mat-timepicker';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ClaimDetailsDialogComponent } from './dialogs/claim-details-dialog/claim-details-dialog.component';
import { CustomerDetailsDialogComponent } from './dialogs/customer-details-dialog/customer-details-dialog.component';
import { ForgotPasswordDialogComponent } from './dialogs/forgot-password-dialog/forgot-password-dialog.component';
import { LiteratureDetailsDialogComponent } from './dialogs/literature-details-dialog/literature-details-dialog.component';
import { ReferralDetailsDialogComponent } from './dialogs/referral-details-dialog/referral-details-dialog.component';
import { TaskDetailsDialogComponent } from './dialogs/task-details-dialog/task-details-dialog.component';
import { ClaimsHandlingComponent } from './pages/claims-handling/claims-handling.component';
import { CustomerManagementComponent } from './pages/customer-management/customer-management.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { PerformanceReportingComponent } from './pages/performance-reporting/performance-reporting.component';
import { ReferenceManagementComponent } from './pages/reference-management/reference-management.component';
import { SalesLiteratureManagementComponent } from './pages/sales-literature-management/sales-literature-management.component';
import { SalesManagementComponent } from './pages/sales-management/sales-management.component';
import { TaskManagementComponent } from './pages/task-management/task-management.component';
import { AddSharedInfoDialogComponent, TeamCollaborationComponent } from './pages/team-collaboration/team-collaboration.component';
import { TrainingManagementComponent } from './pages/training-management/training-management.component';
import { ClaimResponseComponent } from './parts/claim-response/claim-response.component';
import { ClaimsListComponent } from './parts/claims-list/claims-list.component';
import { CustomerFormComponent } from './parts/customer-form/customer-form.component';
import { CustomerListComponent } from './parts/customer-list/customer-list.component';
import { HeaderComponent } from './parts/header/header.component';
import { KpiOverviewComponent } from './parts/kpi-overview/kpi-overview.component';
import { LiteratureUploadComponent } from './parts/literature-upload/literature-upload.component';
import { ReferralFormComponent } from './parts/referral-form/referral-form.component';
import { ReferralListComponent } from './parts/referral-list/referral-list.component';
import { SalesGoalComponent } from './parts/sales-goal/sales-goal.component';
import { SalesHistoryComponent } from './parts/sales-history/sales-history.component';
import { SalesLiteratureListComponent } from './parts/sales-literature-list/sales-literature-list.component';
import { SalesPerformanceComponent } from './parts/sales-performance/sales-performance.component';
import { SharedInformationComponent } from './parts/shared-information/shared-information.component';
import { SideMenuComponent } from './parts/side-menu/side-menu.component';
import { TaskFormComponent } from './parts/task-form/task-form.component';
import { TaskListComponent } from './parts/task-list/task-list.component';
import { TeamMemberListComponent } from './parts/team-member-list/team-member-list.component';
import { TrainingHistoryComponent } from './parts/training-history/training-history.component';
import { TrainingParticipationComponent } from './parts/training-participation/training-participation.component';
import { ApiInterceptor } from './api.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTimepickerModule,
    NgChartsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatListModule,
    MatSidenavModule,
    MatChipsModule,
    MatProgressBarModule,
  ],
  declarations: [
    AppComponent,
    ClaimDetailsDialogComponent,
    CustomerDetailsDialogComponent,
    ForgotPasswordDialogComponent,
    LiteratureDetailsDialogComponent,
    ReferralDetailsDialogComponent,
    TaskDetailsDialogComponent,
    ClaimsHandlingComponent,
    CustomerManagementComponent,
    DashboardComponent,
    LoginComponent,
    PerformanceReportingComponent,
    ReferenceManagementComponent,
    SalesLiteratureManagementComponent,
    SalesManagementComponent,
    TaskManagementComponent,
    TeamCollaborationComponent,
    TrainingManagementComponent,
    ClaimResponseComponent,
    ClaimsListComponent,
    CustomerFormComponent,
    CustomerListComponent,
    HeaderComponent,
    KpiOverviewComponent,
    LiteratureUploadComponent,
    ReferralFormComponent,
    ReferralListComponent,
    SalesGoalComponent,
    SalesHistoryComponent,
    SalesLiteratureListComponent,
    SalesPerformanceComponent,
    SharedInformationComponent,
    SideMenuComponent,
    TaskFormComponent,
    TaskListComponent,
    TeamMemberListComponent,
    TrainingHistoryComponent,
    TrainingParticipationComponent,

    AddSharedInfoDialogComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ja-JP' },
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

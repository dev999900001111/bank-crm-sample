```typescript
// src/app/pages/performance-reporting.component.ts
import { Component, OnInit } from '@angular/core';
import { SalesData, Kpi } from '../../models';
import { PerformanceService } from '../../services';

@Component({
    selector: 'app-performance-reporting',
    templateUrl: './performance-reporting.component.html',
    styleUrls: ['./performance-reporting.component.scss']
})
export class PerformanceReportingComponent implements OnInit {
    salesData: SalesData[];
    kpis: Kpi[];
    lineChartData: any[];
    lineChartLabels: string[];
    lineChartOptions: any;
    lineChartColors: any[];
    lineChartLegend: boolean;
    lineChartType: string;

    matColumnDef = 'columnDef';
    date = 'date';
    amount = 'amount';
    product = 'product';

    constructor(private performanceService: PerformanceService) {
        this.lineChartLabels = [];
        this.lineChartData = [{ data: [], label: 'Sales' }];
        this.lineChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                    ticks: {
                        callback: function (value: any) {
                            return new Date(value).toLocaleDateString();
                        }
                    }
                }]
            }
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(0, 0, 255, 0.2)',
                borderColor: 'rgba(0, 0, 255, 1)',
                pointBackgroundColor: 'rgba(0, 0, 255, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0, 0, 255, 0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }

    ngOnInit(): void {
        this.performanceService.getSalesPerformance().subscribe((data: SalesData[]) => {
            this.salesData = data;
            this.lineChartLabels = this.salesData.map((d: SalesData) => d.date.toString());
            this.lineChartData[0].data = this.salesData.map((d: SalesData) => d.amount);
        });

        this.performanceService.getKpis().subscribe((data: Kpi[]) => {
            this.kpis = data;
        });
    }
}
```
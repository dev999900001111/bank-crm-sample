```typescript
// src/app/parts/sales-performance.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Kpi, SalesData } from '../../models';
import { PerformanceService } from '../../services';

@Component({
  selector: 'app-sales-performance',
  templateUrl: './sales-performance.component.html',
  styleUrls: ['./sales-performance.component.scss']
})
export class SalesPerformanceComponent implements OnInit {

  @Input() salesData: SalesData[];

  lineChartData: ChartDataSets[] = [];
  lineChartLabels: Label[] = [];
  lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          fontColor: 'rgba(0,0,0,0.5)'
        }
      }],
      yAxes: [{
        ticks: {
          fontColor: 'rgba(0,0,0,0.5)',
          beginAtZero: true
        }
      }]
    }
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'rgba(0, 123, 255, 1)',
      backgroundColor: 'rgba(0, 123, 255, 0.1)',
    },
  ];
  lineChartLegend = true;
  lineChartType: ChartType = 'line';

  constructor(private performanceService: PerformanceService) { }

  ngOnInit(): void {
    this.performanceService.getSalesPerformance().subscribe((salesData: SalesData[]) => {
      this.salesData = salesData;
      this.updateChartData();
    });
  }

  updateChartData(): void {
    const data = this.salesData.map((sales: SalesData) => sales.amount);
    const labels = this.salesData.map((sales: SalesData) => new Date(sales.date).toLocaleDateString('ja-JP'));
    this.lineChartData = [{ data, label: 'Sales' }];
    this.lineChartLabels = labels;
  }

}
```
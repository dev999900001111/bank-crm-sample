// src/app/parts/kpi-overview.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Kpi } from '../../models';
import { PerformanceService } from '../../services';

@Component({
    selector: 'app-kpi-overview',
    templateUrl: './kpi-overview.component.html',
    styleUrls: ['./kpi-overview.component.scss']
})
export class KpiOverviewComponent implements OnInit {

    @Input() kpis: Kpi[];

    constructor(private performanceService: PerformanceService) {
    }

    ngOnInit(): void {
        this.performanceService.getKpis().subscribe(kpis => {
            this.kpis = kpis;
        });
    }
}
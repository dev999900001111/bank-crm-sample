# Detailed Screen Design Document

## Screen name
Performance Reporting

## Description
The Performance Reporting screen displays sales performance data and key performance indicators (KPIs) for the current user. The SalesPerformanceComponent displays a table and a chart of sales data, and the KpiOverviewComponent displays a list of KPIs with their values and targets.

## Child Elements
### Angular element components
- SalesPerformanceComponent(@Input:{salesData: SalesData[]}, @Output:{})
- KpiOverviewComponent(@Input:{kpis: Kpi[]}, @Output:{})

### Angular dialog components
None

### HTML components
- mat-card
- mat-table

## Screen layout
The Performance Reporting screen is divided into two sections: the Sales Performance section and the KPI Overview section. The Sales Performance section is displayed on the left side of the screen and the KPI Overview section is displayed on the right side of the screen.

The Sales Performance section contains a mat-card with a mat-table and a mat-chart. The mat-table displays sales data with columns for date, amount, and product. The mat-chart displays the sales data in a line chart with the date on the x-axis and the amount on the y-axis.

The KPI Overview section contains a mat-card with a mat-table. The mat-table displays KPIs with columns for name, value, target, and unit.

## Screen behavior
When the Performance Reporting screen is loaded, the SalesPerformanceComponent and KpiOverviewComponent are initialized with data from the PerformanceService. The SalesPerformanceComponent displays the sales data in a table and a chart, and the KpiOverviewComponent displays the KPIs in a table.

## Input Form
None

## Error messages
None

## Model classes used (excluding use from child components)
- SalesData
- Kpi

## Service classes and methods used (excluding calls from child components)
- PerformanceService: getSalesPerformance(): Observable<SalesData[]>, getKpis(): Observable<Kpi[]>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.
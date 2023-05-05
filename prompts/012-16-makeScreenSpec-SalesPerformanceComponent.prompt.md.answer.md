# Detailed Screen Design Document
## Screen name
Sales Performance
## Description
The Sales Performance screen displays the sales performance of the user for a given period. It includes a table displaying the sales data for each day and a line chart displaying the trend of sales over time. The user can select the time period for which they want to view the sales performance.
## Child Elements
### Angular element components
None
### Angular dialog components
None
### HTML components
- mat-table
- mat-chart
## Screen layout
The Sales Performance screen is divided into two sections: the Sales Performance table and the Sales Performance chart. The Sales Performance table is located on the left side of the screen, and the Sales Performance chart is located on the right side of the screen. The user can select the time period for which they want to view the sales performance using a dropdown menu located above the Sales Performance table.
## Screen behavior
When the Sales Performance screen is loaded, the Sales Performance table displays the sales data for the current week, and the Sales Performance chart displays the trend of sales for the current month. The user can select a different time period using the dropdown menu located above the Sales Performance table. When the user selects a different time period, the Sales Performance table and chart are updated to display the sales data and trend for the selected time period.
## Input Form
The Sales Performance screen does not include an input form.
## Error messages
The Sales Performance screen does not include error messages.
## Model classes used (excluding use from child components)
- SalesData(id: number, userId: number, date: Date, amount: number)
## Service classes and methods used (excluding calls from child components)
- PerformanceService: getSalesPerformance(): Observable<SalesData[]>
- PerformanceService: getKpis(): Observable<Kpi[]>
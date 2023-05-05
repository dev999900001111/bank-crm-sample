# Detailed Screen Design Document
## Screen name
KPI Overview

## Description
The KPI Overview screen displays a summary of the key performance indicators (KPIs) for the sales team. It provides a quick and easy way for sales managers to monitor the performance of their team and identify areas for improvement.

## Child Elements
### Angular element components
None

### Angular dialog components
None

### HTML components
- mat-card: to display the KPIs
- mat-list: to display the details of each KPI

## Screen layout
The KPI Overview screen consists of a single mat-card element that displays a summary of the KPIs. Each KPI is displayed as a separate mat-list element within the mat-card.

## Screen behavior
The KPI Overview screen is loaded when the user navigates to the /performance-reporting route. The screen retrieves the KPI data from the PerformanceService and displays it in the mat-card element.

## Input Form
None

## Error messages
None

## Model classes used (excluding use from child components)
- Kpi

## Service classes and methods used (excluding calls from child components)
- PerformanceService: getKpis(): Observable<Kpi[]>

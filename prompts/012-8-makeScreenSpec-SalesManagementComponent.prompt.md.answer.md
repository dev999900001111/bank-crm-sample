# Detailed Screen Design Document

## Screen name
Sales Management

## Description
The Sales Management screen allows salespeople to view their sales history and set sales goals. It consists of two child components: SalesHistoryComponent and SalesGoalComponent.

## Child Elements
### Angular element components
- SalesHistoryComponent(@Input:{sales: Sale[]}, @Output:{})
- SalesGoalComponent(@Input:{salesGoal: SalesGoal}, @Output:{salesGoalChange: EventEmitter<SalesGoal>})

### Angular dialog components
None

### HTML components
- mat-card
- mat-table

## Screen layout
The Sales Management screen is divided into two sections: Sales History and Sales Goal.

The Sales History section is displayed on the left side of the screen and consists of a mat-card containing a mat-table. The table displays the sales history of the logged-in user, including the customer name, sale amount, product, and date.

The Sales Goal section is displayed on the right side of the screen and consists of a mat-card containing a form for setting sales goals. The form includes fields for the target amount, start date, and end date. The current progress towards the sales goal is displayed in a progress bar below the form.

## Screen behavior
The Sales Management screen is loaded when the user navigates to the /sales-management route. The SalesHistoryComponent and SalesGoalComponent are initialized and the sales history and sales goal data are retrieved from the SalesService.

When the user sets a new sales goal using the SalesGoalComponent form, the new sales goal data is sent to the SalesService to be updated. The progress bar is updated to reflect the new sales goal progress.

## Input Form
The SalesGoalComponent includes a form for setting a new sales goal. The form includes the following fields:
- Target amount (number)
- Start date (date)
- End date (date)

## Error messages
If there is an error retrieving the sales history or sales goal data, an error message is displayed in the SalesHistoryComponent or SalesGoalComponent, respectively.

If there is an error updating the sales goal data, an error message is displayed in the SalesGoalComponent.

## Model classes used (excluding use from child components)
- Sale
- SalesGoal

## Service classes and methods used (excluding calls from child components)
- SalesService: getSalesHistory(), createSalesGoal(salesGoal: SalesGoal), updateSalesGoal(salesGoal: SalesGoal), getSalesGoal()
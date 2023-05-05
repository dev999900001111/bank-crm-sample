# Detailed Screen Design Document
## Screen name
CustomerDetailsDialog
## Description
This dialog displays detailed information about a selected customer, including their personal information, transaction history, and sales performance.
## Child Elements
### Angular element components
None
### Angular dialog components
None
### HTML components
- mat-card: container for the customer details
- mat-list: list of customer information
## Screen layout
The dialog is centered on the screen and has a width of 80% of the screen width. The dialog contains a mat-card that displays the customer details. The mat-card has a header with the customer's name and a close button on the top right corner. The body of the mat-card contains a mat-list that displays the customer's personal information, transaction history, and sales performance.
## Screen behavior
The dialog is opened by clicking on a customer in the CustomerListComponent. The dialog displays the selected customer's information. The dialog can be closed by clicking on the close button or by clicking outside of the dialog.
## Input Form
None
## Error messages
None
## Model classes used (excluding use from child components)
- Customer
- Sale
- SalesData
## Service classes and methods used (excluding calls from child components)
- CustomerService: getCustomerDetails(customerId: number): Observable<Customer>
- SalesService: getSalesHistory(): Observable<Sale[]>, getSalesPerformance(): Observable<SalesData[]>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.
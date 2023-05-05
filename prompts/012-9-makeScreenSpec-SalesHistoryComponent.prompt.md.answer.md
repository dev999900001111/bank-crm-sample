# Detailed Screen Design Document
## Screen name
Sales History

## Description
The Sales History screen displays a list of sales transactions made by the salesperson. The list includes the customer name, transaction date, product, and transaction amount. The salesperson can view the details of each transaction by clicking on the transaction row.

## Child Elements
### Angular element components
None

### Angular dialog components
None

### HTML components
- mat-table

## Screen layout
The Sales History screen consists of a single mat-table component that displays a list of sales transactions. The table has columns for customer name, transaction date, product, and transaction amount. The table is sortable by each column.

## Screen behavior
- When the Sales History screen is loaded, the salesperson's sales history is retrieved from the SalesService.
- The sales history is displayed in a mat-table.
- The salesperson can sort the table by clicking on the column headers.
- The salesperson can click on a row to view the details of the transaction in a dialog.

## Input Form
None

## Error messages
- If there is an error retrieving the sales history, a message is displayed indicating that the sales history could not be retrieved.
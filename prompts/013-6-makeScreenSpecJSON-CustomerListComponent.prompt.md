# Detailed Screen Design Document
## Screen name
Customer List
## Description
The Customer List screen displays a list of all customers registered in the system. The list can be filtered and sorted based on various criteria. The screen also provides the ability to select a customer from the list to view their details or edit their information.
## Child Elements
### Angular element components
- CustomerDetailsDialog(@Input:{customer: Customer}, @Output:{})
### Angular dialog components
None
### HTML components
- mat-table
## Screen layout
The screen is divided into two main sections: the customer list and the search bar. The customer list is displayed in a mat-table with columns for customer name, email, phone number, address, registration date, and segment. The search bar is located above the table and allows the user to search for customers by name, email, or phone number. The table also includes a button to add a new customer and a button to export the list to a CSV file.
## Screen behavior
- The customer list is initially sorted by registration date in descending order.
- The user can click on a column header to sort the list by that column in ascending or descending order.
- The user can search for customers by entering a query in the search bar. The list will update in real-time as the user types.
- The user can click on a customer in the list to view their details in a dialog.
- The user can click on the edit button next to a customer in the list to edit their information in a form.
- The user can click on the add button to add a new customer.
- The user can click on the export button to export the list to a CSV file.
## Input Form
None
## Error messages
- "No customers found" - displayed when the search query returns no results.
## Model classes used (excluding use from child components)
- Customer(id: number, firstName: string, lastName: string, email: string, phone: string, address: string, registrationDate: Date, segment: CustomerSegment)
## Service classes and methods used (excluding calls from child components)
- CustomerService: getCustomers(): Observable<Customer[]>, searchCustomers(query: string): Observable<Customer[]>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.
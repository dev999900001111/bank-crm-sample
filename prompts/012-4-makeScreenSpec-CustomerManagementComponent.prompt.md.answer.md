# Detailed Screen Design Document
## Screen name
Customer Management

## Description
The Customer Management screen allows salespeople to manage customer information, including registration, editing, search, and segmentation.

## Child Elements
### Angular element components
- CustomerFormComponent(@Input:{customer: Customer}, @Output:{customerChange: EventEmitter<Customer>})
- CustomerListComponent(@Input:{customers: Customer[]}, @Output:{})
### Angular dialog components
- CustomerDetailsDialog(MAT_DIALOG_DATA:{customer: Customer})
### HTML components
- mat-card, - mat-table

## Screen layout
The screen is divided into two sections: the customer list and the customer form. The customer list is displayed on the left side of the screen, and the customer form is displayed on the right side of the screen. The customer list displays a table of all customers, and the customer form displays a form for adding or editing customer information.

## Screen behavior
When the screen is loaded, the customer list is displayed with all customers listed in a table. The user can search for customers by entering a search query in the search bar above the customer list. The user can also segment customers by selecting a segment from the dropdown menu above the customer list.

When the user clicks on a customer in the customer list, the customer form is updated with the selected customer's information. The user can then edit the customer information in the form and click the "Save" button to save the changes. If the user wants to add a new customer, they can click the "Add Customer" button at the top of the customer form.

## Input Form
The customer form includes the following input fields:
- First Name (required)
- Last Name (required)
- Email (required)
- Phone
- Address
- Segment (dropdown with options: Premium, Standard, Basic)

## Error messages
If the user tries to save the customer form without entering a required field, an error message will be displayed next to the field.

## Model classes used (excluding use from child components)
- Customer(id: number, firstName: string, lastName: string, email: string, phone: string, address: string, registrationDate: Date, segment: CustomerSegment)

## Service classes and methods used (excluding calls from child components)
- CustomerService: createCustomer(customer: Customer): Observable<Customer>, updateCustomer(customer: Customer): Observable<Customer>, getCustomers(): Observable<Customer[]>, searchCustomers(query: string): Observable<Customer[]>, getCustomerDetails(customerId: number): Observable<Customer>
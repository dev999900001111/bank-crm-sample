# Detailed Screen Design Document
## Screen name
Reference Management
## Description
The Reference Management screen allows bank salespeople to manage referral information. Salespeople can view a list of existing referrals, add new referrals, and edit existing referrals. They can also view the details of a referral by clicking on it in the list.
## Child Elements
### Angular element components
- ReferralListComponent(@Input:{referrals: Referral[]}, @Output:{})
- ReferralFormComponent(@Input:{referral: Referral}, @Output:{referralChange: EventEmitter<Referral>})
### Angular dialog components
- ReferralDetailsDialog(MAT_DIALOG_DATA:{referral: Referral})
### HTML components
- mat-card
- mat-table
## Screen layout
The screen is divided into two sections. The left section displays a list of existing referrals in a mat-table. The right section displays a form for adding or editing referral information. When a referral is selected from the list, its details are displayed in a dialog box.
## Screen behavior
- When the screen is loaded, the ReferralListComponent retrieves a list of existing referrals from the ReferenceService and displays them in a mat-table.
- When a referral is selected from the list, its details are displayed in a dialog box using the ReferralDetailsDialog component.
- When the "Add Referral" button is clicked, the ReferralFormComponent is displayed with empty fields for adding a new referral.
- When the "Edit" button is clicked on a referral row, the ReferralFormComponent is displayed with the fields pre-populated with the referral information for editing.
- When the "Save" button is clicked on the ReferralFormComponent, the form data is validated and sent to the ReferenceService to create or update the referral information. The ReferralListComponent is then updated with the new or updated referral information.
## Input Form
The ReferralFormComponent contains the following input fields:
- First Name (required)
- Last Name (required)
- Email (required, email format)
- Phone (required, numeric format)
- Referral Date (required, date format)
- Status (required, dropdown with options: NEW, CONTACTED, CONVERTED, LOST)
- Notes (optional)
## Error messages
- "First Name is required."
- "Last Name is required."
- "Email is required."
- "Email must be in a valid format."
- "Phone is required."
- "Phone must be in a valid format."
- "Referral Date is required."
- "Status is required."
## Model classes used (excluding use from child components)
- Referral(id: number, customerId: number, referralDate: Date, status: ReferralStatus, notes: string)
## Service classes and methods used (excluding calls from child components)
- ReferenceService: createReferral(referral: Referral): Observable<Referral>, updateReferral(referral: Referral): Observable<Referral>, getReferrals(): Observable<Referral[]>, getReferralDetails(referralId: number): Observable<Referral>
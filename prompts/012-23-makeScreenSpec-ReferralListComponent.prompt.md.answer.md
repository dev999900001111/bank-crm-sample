# Detailed Screen Design Document
## Screen name
Referral List
## Description
The Referral List screen displays a list of all referrals made by the sales team. The list can be sorted and filtered by various criteria. The user can click on a referral to view its details in a dialog box.
## Child Elements
### Angular element components
- ReferralDetailsDialog(@Input:{referral: Referral}, @Output:{referralChange: EventEmitter<Referral>})
### Angular dialog components
None
### HTML components
- mat-table
## Screen layout
The Referral List screen consists of a single mat-table component that displays a list of all referrals. The table has columns for the referral date, customer name, status, and notes. The table can be sorted by any of these columns by clicking on the column header. The table also has a search bar that allows the user to filter the list by customer name or status.
## Screen behavior
When the user clicks on a referral in the table, the ReferralDetailsDialog component is opened, displaying the details of the selected referral. The user can edit the referral details in the dialog box and save the changes by clicking the "Save" button. The ReferralDetailsDialog component emits an event when the referral is updated, which is handled by the Referral List component to update the table.
## Input Form
None
## Error messages
None
## Model classes used (excluding use from child components)
- Referral
## Service classes and methods used (excluding calls from child components)
- ReferenceService: getReferrals(): Observable<Referral[]>, updateReferral(referral: Referral): Observable<Referral>, getReferralDetails(referralId: number): Observable<Referral>
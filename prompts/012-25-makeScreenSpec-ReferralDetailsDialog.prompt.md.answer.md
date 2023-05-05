# Detailed Screen Design Document
## Screen name
Referral Details Dialog

## Description
The Referral Details Dialog displays the details of a selected referral.

## Child Elements
### Angular element components
None
### Angular dialog components
None
### HTML components
- mat-card: Displays the referral details.
- mat-list: Displays the referral information in a list format.

## Screen layout
The Referral Details Dialog is a pop-up dialog that appears on top of the current page. It has a mat-card element that displays the referral details and a mat-list element that displays the referral information in a list format.

## Screen behavior
The Referral Details Dialog is triggered when a user clicks on a referral in the Referral List Component. It displays the referral details in a pop-up dialog. The user can close the dialog by clicking on the close button.

## Input Form
None

## Error messages
None

## Model classes used (excluding use from child components)
- Referral: The Referral model class is used to store the referral information.

## Service classes and methods used (excluding calls from child components)
- ReferenceService: The getReferralDetails(referralId: number) method is used to retrieve the referral details.
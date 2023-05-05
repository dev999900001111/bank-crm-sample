Variables:
- referrals: any[] - an array of referral objects
- displayedColumns: string[] - an array of column names to be displayed in the mat-table
- formTitle: string - the title of the referral form
- selectedReferral: any - the currently selected referral object

Constants:
- N/A

ViewChild:
- detailsDialog: TemplateRef<any> - a reference to the details dialog template

Functions:
- openDetailsDialog(referral: any): void - opens the details dialog for a given referral object
- editReferral(referral: any): void - opens the referral form for editing a given referral object
- onReferralChange(referral: any): void - updates the selected referral object when the referral form is changed
- closeDialog(): void - closes the details dialog
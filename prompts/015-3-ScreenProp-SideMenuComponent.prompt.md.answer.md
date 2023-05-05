Variables:
- isHandset$, Observable<boolean>, a boolean observable that determines if the device is a handset or not
- user, object, an object containing the user's first and last name

Constants:
- active-link, string, a CSS class for the active link in the sidenav
- column names in the mat-table, string[], an array of strings representing the column names in the mat-table

ViewChild:
- drawer, MatSidenav, a reference to the sidenav component

Functions:
- ngOnInit(), void, a lifecycle hook that initializes the component
- ngAfterViewInit(), void, a lifecycle hook that initializes the ViewChild components after the view has been initialized
- toggleDrawer(), void, a function that toggles the sidenav open and closed based on the device type
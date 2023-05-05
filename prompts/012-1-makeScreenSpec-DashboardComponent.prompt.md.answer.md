# Detailed Screen Design Document
## Screen name
DashboardComponent
## Description
The DashboardComponent is the landing page of the CRM system for bank salespeople. It displays key performance indicators (KPIs), recent activities, and upcoming tasks to help salespeople manage their daily activities and track their performance.
## Child Elements
### Angular element components
- HeaderComponent(@Input:{user: User}, @Output:{})
- SideMenuComponent(@Input:{}, @Output:{})
### Angular dialog components
None
### HTML components
- mat-card
## Screen layout
The DashboardComponent consists of a single mat-card element that contains the following sections:
- Header section: displays the system logo, user profile image, and user name.
- KPI section: displays the following KPIs:
  - Total sales amount: the total amount of sales made by the salesperson.
  - Sales goal progress: the progress towards the sales goal set by the salesperson.
  - Customer satisfaction rate: the average satisfaction rate of the salesperson's customers.
- Recent activities section: displays the most recent sales, tasks, and claims handled by the salesperson.
- Upcoming tasks section: displays the tasks that are due in the next 7 days.
## Screen behavior
The DashboardComponent is loaded when the user logs in to the system. It retrieves the necessary data from the SalesService, TaskService, and ClaimsService to display the KPIs, recent activities, and upcoming tasks. The KPIs are updated in real-time as new sales are made and sales goals are updated. The recent activities and upcoming tasks are refreshed every time the DashboardComponent is loaded.
## Input Form
None
## Error messages
None
## Model classes used (excluding use from child components)
- User
- Sale
- SalesGoal
- Task
- Claim
## Service classes and methods used (excluding calls from child components)
- SalesService: getSalesHistory(), getSalesGoal()
- TaskService: getTasks()
- ClaimsService: getClaims()
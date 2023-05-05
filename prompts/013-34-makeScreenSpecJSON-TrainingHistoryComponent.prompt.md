# Detailed Screen Design Document
## Screen name
Training History

## Description
The Training History screen displays a list of completed training sessions for the logged-in user. It also shows the title, description, start and end dates, and status of each training session. The user can participate in a training session by clicking the "Participate" button next to the training session. The user can also view the effectiveness score of each training session they have participated in.

## Child Elements
### Angular element components
None

### Angular dialog components
None

### HTML components
- mat-table

## Screen layout
The Training History screen consists of a single mat-table component that displays a list of completed training sessions. The table has the following columns:
- Title
- Description
- Start Date
- End Date
- Status
- Participate Button
- Effectiveness Score

## Screen behavior
- When the Training History screen is loaded, the component calls the TrainingService's getTrainingHistory() method to retrieve the list of completed training sessions for the logged-in user.
- The component displays the list of training sessions in a mat-table.
- The user can click the "Participate" button next to a training session to participate in the training session. The component calls the TrainingService's participateInTraining(trainingId: number) method to mark the training session as "ongoing" and add the user to the list of participants.
- If the user has already participated in a training session, the component displays the effectiveness score of the training session in the "Effectiveness Score" column.

## Input Form
None

## Error messages
- If there is an error retrieving the list of completed training sessions, the component displays an error message: "Failed to retrieve training history. Please try again later."
- If there is an error participating in a training session, the component displays an error message: "Failed to participate in training. Please try again later." 

## Model classes used (excluding use from child components)
- Training(id: number, title: string, description: string, startDate: Date, endDate: Date, status: TrainingStatus, participants: number[])
- TrainingStatus(UPCOMING: string, ONGOING: string, COMPLETED: string, CANCELED: string)

## Service classes and methods used (excluding calls from child components)
- TrainingService: getTrainingHistory(): Observable<Training[]>, participateInTraining(trainingId: number): Observable<Training>

# prompt
Please convert the above List of Screensn into JSON format.
{"modelClassesUsed":[${Model class used}], "serviceClassesUsed":[${Service class used}]]}
* Models and Services shall be by name only List.
Note that this is minified JSON without newlines and spaces.
# Detailed Screen Design Document
## Screen name
Training Management
## Description
The Training Management screen allows users to view their training history and participate in upcoming training sessions. Users can also view their skill acquisition status and training effectiveness.
## Child Elements
### Angular element components
- TrainingHistoryComponent(@Input:{trainings: Training[]}, @Output:{})
- TrainingParticipationComponent(@Input:{training: Training}, @Output:{trainingChange: EventEmitter<Training>})
### Angular dialog components
None
### HTML components
- mat-card
- mat-table
## Screen layout
The screen is divided into two sections: Training History and Training Participation. The Training History section displays a table of all completed training sessions, including the title, description, start and end dates, and status. The Training Participation section displays a form for participating in upcoming training sessions, including the title, description, start and end dates, and status. The form also includes a progress bar indicating the user's skill acquisition status for the training topic.
## Screen behavior
The Training History section displays a table of all completed training sessions, sorted by date in descending order. Users can view the details of a training session by clicking on a row in the table. The Training Participation section displays a form for participating in upcoming training sessions. Users can select a training session from a dropdown list, and the form will display the title, description, start and end dates, and status of the selected training session. Users can also see their skill acquisition status for the training topic in a progress bar.
## Input Form
The Training Participation section includes a form for participating in upcoming training sessions. The form includes the following fields:
- Training Session: A dropdown list of upcoming training sessions.
- Skill Acquisition Status: A progress bar indicating the user's skill acquisition status for the training topic.
- Participate Button: A button to submit the form and participate in the selected training session.
## Error messages
- "No completed training sessions found." - displayed in the Training History section if the user has not completed any training sessions.
- "No upcoming training sessions found." - displayed in the Training Participation section if there are no upcoming training sessions available.
## Model classes used (excluding use from child components)
- Training
- TrainingEffectiveness
## Service classes and methods used (excluding calls from child components)
- TrainingService: getTrainingHistory(), participateInTraining(trainingId: number), getTrainingEffectiveness()
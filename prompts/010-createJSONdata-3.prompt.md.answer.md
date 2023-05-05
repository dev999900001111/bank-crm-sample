{
  "PUT-/api/tasks/update": {
    "task": {
      "id": 1,
      "userId": 2,
      "title": "会議の準備",
      "description": "来週の会議の資料を作成する",
      "startDate": "2022-01-10T09:00:00.000Z",
      "endDate": "2022-01-10T12:00:00.000Z",
      "status": "IN_PROGRESS",
      "reminder": {
        "id": 1,
        "taskId": 1,
        "time": "2022-01-10T11:00:00.000Z",
        "message": "会議の準備のリマインダー"
      }
    }
  },
  "GET-/api/tasks": {
    "tasks": [
      {
        "id": 1,
        "userId": 2,
        "title": "会議の準備",
        "description": "来週の会議の資料を作成する",
        "startDate": "2022-01-10T09:00:00.000Z",
        "endDate": "2022-01-10T12:00:00.000Z",
        "status": "IN_PROGRESS",
        "reminder": {
          "id": 1,
          "taskId": 1,
          "time": "2022-01-10T11:00:00.000Z",
          "message": "会議の準備のリマインダー"
        }
      },
      {
        "id": 2,
        "userId": 2,
        "title": "プレゼン資料の作成",
        "description": "来週のプレゼンの資料を作成する",
        "startDate": "2022-01-11T09:00:00.000Z",
        "endDate": "2022-01-11T12:00:00.000Z",
        "status": "NOT_STARTED",
        "reminder": null
      }
    ]
  },
  "GET-/api/tasks/1": {
    "task": {
      "id": 1,
      "userId": 2,
      "title": "会議の準備",
      "description": "来週の会議の資料を作成する",
      "startDate": "2022-01-10T09:00:00.000Z",
      "endDate": "2022-01-10T12:00:00.000Z",
      "status": "IN_PROGRESS",
      "reminder": {
        "id": 1,
        "taskId": 1,
        "time": "2022-01-10T11:00:00.000Z",
        "message": "会議の準備のリマインダー"
      }
    }
  },
  "POST-/api/tasks/1/reminder": {
    "reminder": {
      "id": 2,
      "taskId": 1,
      "time": "2022-01-10T15:00:00.000Z",
      "message": "会議の準備のリマインダー2"
    }
  },
  "GET-/api/performance/sales": {
    "salesData": [
      {
        "id": 1,
        "userId": 2,
        "date": "2022-01-01T00:00:00.000Z",
        "amount": 10000
      },
      {
        "id": 2,
        "userId": 2,
        "date": "2022-01-02T00:00:00.000Z",
        "amount": 20000
      },
      {
        "id": 3,
        "userId": 2,
        "date": "2022-01-03T00:00:00.000Z",
        "amount": 15000
      }
    ]
  }
}
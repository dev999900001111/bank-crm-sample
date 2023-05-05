{
  "http://example.com/api/tasks-get": [
    {
      "id": 1,
      "userId": 1,
      "title": "タスク1",
      "description": "説明1",
      "startDate": "2022-01-01T00:00:00.000Z",
      "endDate": "2022-01-02T00:00:00.000Z",
      "status": "NOT_STARTED",
      "reminder": {
        "id": 1,
        "taskId": 1,
        "time": "2022-01-01T12:00:00.000Z",
        "message": "リマインダー1"
      }
    },
    {
      "id": 2,
      "userId": 1,
      "title": "タスク2",
      "description": "説明2",
      "startDate": "2022-01-02T00:00:00.000Z",
      "endDate": "2022-01-03T00:00:00.000Z",
      "status": "IN_PROGRESS",
      "reminder": null
    }
  ],
  "http://example.com/api/tasks-post": {
    "id": 3,
    "userId": 1,
    "title": "新しいタスク",
    "description": "新しい説明",
    "startDate": "2022-01-03T00:00:00.000Z",
    "endDate": "2022-01-04T00:00:00.000Z",
    "status": "NOT_STARTED",
    "reminder": null
  },
  "http://example.com/api/tasks-put": {
    "id": 1,
    "userId": 1,
    "title": "更新されたタスク1",
    "description": "更新された説明1",
    "startDate": "2022-01-01T00:00:00.000Z",
    "endDate": "2022-01-02T00:00:00.000Z",
    "status": "IN_PROGRESS",
    "reminder": {
      "id": 1,
      "taskId": 1,
      "time": "2022-01-01T12:00:00.000Z",
      "message": "更新されたリマインダー1"
    }
  },
  "http://example.com/api/tasks-get-1": {
    "id": 1,
    "userId": 1,
    "title": "タスク1",
    "description": "説明1",
    "startDate": "2022-01-01T00:00:00.000Z",
    "endDate": "2022-01-02T00:00:00.000Z",
    "status": "NOT_STARTED",
    "reminder": {
      "id": 1,
      "taskId": 1,
      "time": "2022-01-01T12:00:00.000Z",
      "message": "リマインダー1"
    }
  },
  "http://example.com/api/tasks-post-1/reminder": {
    "id": 2,
    "taskId": 1,
    "time": "2022-01-01T18:00:00.000Z",
    "message": "新しいリマインダー"
  }
}
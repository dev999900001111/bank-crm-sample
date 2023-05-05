{
  "GET-/api/sales-literature/1": {
    "literature": {
      "id": 1,
      "title": "営業資料1",
      "description": "営業資料1の説明",
      "uploadDate": "2021-01-01",
      "fileUrl": "https://example.com/sales-literature/1",
      "fileType": "PDF"
    }
  },
  "POST-/api/collaboration/share-information": {
    "info": {
      "id": 1,
      "userId": 2,
      "title": "成功事例1",
      "description": "成功事例1の詳細",
      "date": "2021-01-01",
      "category": "SUCCESS_STORY"
    }
  },
  "GET-/api/collaboration/shared-information": {
    "sharedInformation": [
      {
        "id": 1,
        "userId": 2,
        "title": "成功事例1",
        "description": "成功事例1の詳細",
        "date": "2021-01-01",
        "category": "SUCCESS_STORY"
      },
      {
        "id": 2,
        "userId": 3,
        "title": "ノウハウ1",
        "description": "ノウハウ1の詳細",
        "date": "2021-01-02",
        "category": "KNOW_HOW"
      },
      {
        "id": 3,
        "userId": 4,
        "title": "コツ1",
        "description": "コツ1の詳細",
        "date": "2021-01-03",
        "category": "TIP"
      }
    ]
  },
  "GET-/api/training/history": {
    "trainings": [
      {
        "id": 1,
        "title": "トレーニング1",
        "description": "トレーニング1の詳細",
        "startDate": "2021-01-01",
        "endDate": "2021-01-02",
        "status": "COMPLETED",
        "participants": [2, 3, 4]
      },
      {
        "id": 2,
        "title": "トレーニング2",
        "description": "トレーニング2の詳細",
        "startDate": "2021-02-01",
        "endDate": "2021-02-02",
        "status": "CANCELED",
        "participants": [3, 4]
      }
    ]
  },
  "POST-/api/training/1/participate": {
    "training": {
      "id": 1,
      "title": "トレーニング1",
      "description": "トレーニング1の詳細",
      "startDate": "2021-01-01",
      "endDate": "2021-01-02",
      "status": "COMPLETED",
      "participants": [2, 3, 4]
    }
  }
}
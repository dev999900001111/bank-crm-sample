{
  "http://example.com/api/training/history-GET": [
    {
      "id": 1,
      "title": "営業トレーニング",
      "description": "営業スキルを向上させるトレーニングです。",
      "startDate": "2022-01-10T09:00:00.000Z",
      "endDate": "2022-01-10T17:00:00.000Z",
      "status": "COMPLETED",
      "participants": [1, 2, 3]
    },
    {
      "id": 2,
      "title": "マネジメントトレーニング",
      "description": "マネジメントスキルを向上させるトレーニングです。",
      "startDate": "2022-02-05T09:00:00.000Z",
      "endDate": "2022-02-05T17:00:00.000Z",
      "status": "COMPLETED",
      "participants": [1, 2, 3, 4]
    }
  ],
  "http://example.com/api/training/1/participate-POST": {
    "id": 1,
    "title": "営業トレーニング",
    "description": "営業スキルを向上させるトレーニングです。",
    "startDate": "2022-01-10T09:00:00.000Z",
    "endDate": "2022-01-10T17:00:00.000Z",
    "status": "ONGOING",
    "participants": [1, 2, 3, 5]
  },
  "http://example.com/api/training/effectiveness-GET": [
    {
      "id": 1,
      "trainingId": 1,
      "userId": 1,
      "effectivenessScore": 4
    },
    {
      "id": 2,
      "trainingId": 1,
      "userId": 2,
      "effectivenessScore": 5
    },
    {
      "id": 3,
      "trainingId": 1,
      "userId": 3,
      "effectivenessScore": 3
    },
    {
      "id": 4,
      "trainingId": 2,
      "userId": 1,
      "effectivenessScore": 5
    },
    {
      "id": 5,
      "trainingId": 2,
      "userId": 2,
      "effectivenessScore": 4
    },
    {
      "id": 6,
      "trainingId": 2,
      "userId": 3,
      "effectivenessScore": 4
    },
    {
      "id": 7,
      "trainingId": 2,
      "userId": 4,
      "effectivenessScore": 3
    }
  ]
}
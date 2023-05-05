{
  "POST-/api/auth/login": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    "user": {
      "id": 1,
      "username": "john_doe",
      "email": "john.doe@example.com",
      "firstName": "ジョン",
      "lastName": "ドウ",
      "role": "ADMIN",
      "profileImage": "https://example.com/profile.jpg"
    }
  },
  "POST-/api/auth/forgot-password": {
    "success": true
  },
  "POST-/api/users/update-profile": {
    "user": {
      "id": 1,
      "username": "john_doe",
      "email": "john.doe@example.com",
      "firstName": "ジョン",
      "lastName": "ドウ",
      "role": "ADMIN",
      "profileImage": "https://example.com/profile.jpg"
    }
  },
  "GET-/api/users/profile": {
    "user": {
      "id": 1,
      "username": "john_doe",
      "email": "john.doe@example.com",
      "firstName": "ジョン",
      "lastName": "ドウ",
      "role": "ADMIN",
      "profileImage": "https://example.com/profile.jpg"
    }
  },
  "GET-/api/users/team-members": {
    "teamMembers": [
      {
        "id": 2,
        "username": "jane_smith",
        "email": "jane.smith@example.com",
        "firstName": "ジェーン",
        "lastName": "スミス",
        "role": "MANAGER",
        "profileImage": "https://example.com/profile.jpg"
      },
      {
        "id": 3,
        "username": "bob_johnson",
        "email": "bob.johnson@example.com",
        "firstName": "ボブ",
        "lastName": "ジョンソン",
        "role": "EMPLOYEE",
        "profileImage": "https://example.com/profile.jpg"
      }
    ]
  }
}
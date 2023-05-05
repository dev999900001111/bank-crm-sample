{
  "GET-/api/referrals": {
    "referrals": [
      {
        "id": 1,
        "customerId": 1,
        "referralDate": "2022-01-01T00:00:00.000Z",
        "status": "NEW",
        "notes": "紹介者からの情報を待っています。"
      },
      {
        "id": 2,
        "customerId": 2,
        "referralDate": "2022-01-02T00:00:00.000Z",
        "status": "CONTACTED",
        "notes": "紹介者と連絡を取りました。"
      },
      {
        "id": 3,
        "customerId": 3,
        "referralDate": "2022-01-03T00:00:00.000Z",
        "status": "CONVERTED",
        "notes": "紹介者からの新規顧客を獲得しました！"
      },
      {
        "id": 4,
        "customerId": 4,
        "referralDate": "2022-01-04T00:00:00.000Z",
        "status": "LOST",
        "notes": "紹介者からの情報を得られませんでした。"
      }
    ]
  },
  "GET-/api/referrals/1": {
    "referral": {
      "id": 1,
      "customerId": 1,
      "referralDate": "2022-01-01T00:00:00.000Z",
      "status": "NEW",
      "notes": "紹介者からの情報を待っています。"
    }
  },
  "PUT-/api/referrals/update": {
    "referral": {
      "id": 1,
      "customerId": 1,
      "referralDate": "2022-01-01T00:00:00.000Z",
      "status": "CONTACTED",
      "notes": "紹介者と連絡を取りました。"
    }
  },
  "POST-/api/sales-literature/upload": {
    "literature": {
      "id": 1,
      "title": "営業資料1",
      "description": "新製品の説明資料です。",
      "uploadDate": "2022-01-01T00:00:00.000Z",
      "fileUrl": "https://example.com/sales-literature1.pdf",
      "fileType": "PDF"
    }
  },
  "GET-/api/sales-literature": {
    "literature": [
      {
        "id": 1,
        "title": "営業資料1",
        "description": "新製品の説明資料です。",
        "uploadDate": "2022-01-01T00:00:00.000Z",
        "fileUrl": "https://example.com/sales-literature1.pdf",
        "fileType": "PDF"
      },
      {
        "id": 2,
        "title": "営業資料2",
        "description": "サービスの特徴を説明する資料です。",
        "uploadDate": "2022-01-02T00:00:00.000Z",
        "fileUrl": "https://example.com/sales-literature2.docx",
        "fileType": "DOCX"
      },
      {
        "id": 3,
        "title": "営業資料3",
        "description": "販売実績をまとめた資料です。",
        "uploadDate": "2022-01-03T00:00:00.000Z",
        "fileUrl": "https://example.com/sales-literature3.xlsx",
        "fileType": "XLSX"
      },
      {
        "id": 4,
        "title": "営業資料4",
        "description": "新サービスのプレゼン資料です。",
        "uploadDate": "2022-01-04T00:00:00.000Z",
        "fileUrl": "https://example.com/sales-literature4.pptx",
        "fileType": "PPTX"
      }
    ]
  }
}
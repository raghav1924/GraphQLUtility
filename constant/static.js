export const fragement_and_query=`
type Address {
  street: String
  city: String
  zipCode: String
  country: String
}
  input inpAddress {
  street: String
  city: String
  zipCode: String
  country: String
}
`


export const fragmentsData = `
fragment AddressFields on Address {
  street
  city
  zipCode
  country
}

`;



export const initialData=`{
  "data": {
    "user": {
      "id": "12345",
      "username": "anime_lover",
      "profile": {
        "firstName": "Saitama",
        "lastName": "Sensei",
        "email": "saitama@example.com",
        "contact": {
          "phone": "+1234567890",
          "address": {
            "street": "One Punch St.",
            "city": "Z City",
            "zipCode": "56789",
            "country": "Japan"
          }
        }
      },
      "preferences": {
        "theme": "dark",
        "language": "en",
        "notifications": {
          "email": true,
          "sms": false,
          "push": true
        }
      }
    }
  }
}`;

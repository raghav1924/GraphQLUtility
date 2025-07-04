// pages/index.jsx
import Link from 'next/link'
// import Navbar from '@/components/Navbar'
// import CodeSnippet from '@/components/CodeSnippet'
import Navbar from '@/component/Navbar'
import CodeSnippet from '@/component/CodeUI'

export default function HomePage() {
  const sampleCode = `
{
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
}

  `.trim()
  const sampleCode2 = `
type Notifications {
  email: Boolean
  sms: Boolean
  push: Boolean
}

type Preferences {
  theme: String
  language: String
  notifications: Notifications
}

type Address {
  street: String
  city: String
  zipCode: String
  country: String
}

type Contact {
  phone: String
  address: Address
}

type Profile {
  firstName: String
  lastName: String
  email: String
  contact: Contact
}

type User {
  id: String
  username: String
  preferences: Preferences
  profile: Profile
}

type Data {
  user: User
}

type AutogeneratedMainType {
  data: Data
}


  `.trim()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div
        className="flex-1 flex flex-col items-center justify-center text-center px-6"
      // style={{
      //   background: 'linear-gradient(to right bottom, #ffcc99, #f6bd83, #edad6e, #e49e59, #da8f44)'
      // }}
      >
  <main className="max-w-4xl mx-auto text-center font-sans">
  <h1
    className="
      roboto-flex
      text-5xl md:text-6xl 
      font-extrabold mb-6
      text-black
      tracking-tight
    "
  >
    GraphQL Utility
  </h1>
  <p
  className="roboto-text text-xl md:text-2xl font-medium leading-relaxed"
  style={{ color: '#102575' }}
>
  Convert your initial <span className="font-semibold" style={{ color: '#102575' }}>JSON</span> data to a <span className="font-semibold" style={{ color: '#102575' }}>GraphQL typedef</span>,
  generate fragments from that typedef, and download ready-to-use <code className="bg-gray-800 text-gray-300 px-1 rounded">.js</code> fragment files for your GraphQL project.
</p>

</main>









        {/* Code Snippets Side by Side */}
        <div className="flex flex-wrap justify-center  w-full px-4">
          <div className="w-full md:w-1/2">
            <CodeSnippet code={sampleCode} language="tsx" />
          </div>
          <div className="w-full md:w-1/2">
            <CodeSnippet code={sampleCode2} language="tsx" />
          </div>
        </div>
      </div>
    </div>

  )
}

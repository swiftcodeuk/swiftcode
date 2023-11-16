import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

function Content() {
  return (
    <div className="flex justify-center pt-0 pb-60">
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
    <div className="mt-10 max-w-2xl space-y-6 text-base">
            
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Cookies</h1>
            <p>This Privacy Policy applies to all of our websites and our mobile applications (“the Website”). In this Privacy Policy, when we refer to any of our Website, we mean any website or mobile application operated by or on behalf of SwiftCode Ltd.</p>
            <p>By accessing the Website, you agree to be bound by these terms and conditions whenever you access the Website on any device. This Privacy Policy forms part of and is incorporated into our Website Terms and Conditions. Any changes to this policy will be posted here. We reserve the right to vary this Privacy Policy from time to time and such changes shall become effective as soon as they are posted. Your continued use of the Website constitutes your agreement to all such changes. We are committed to protecting the personal information you give us and telling you how we use the information we gather about you.</p>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">What information do we collect from you?</h2>
            <p>We may collect information from you when you fill in an online registration form for any of the services available on our Website, (e.g., chat areas, your Profile page, forums, shopping, advisory services, competitions etc.).</p>
            <p>We collect information about your use of the Website and services it offers through “cookies”. For more information on “cookies” please see our Cookie Policy which forms part of this Privacy Policy</p>
            <p>In addition to personal information, we may also collect information about you automatically when you visit the Website by using cookies (small text files) trends which we may make use of ourselves, or pass to our associated companies or to unconnected parties and our advertising partner may also use cookies to serve advertisements that it believes are most likely to be of use or interest to you. For more information about cookies, including how to turn this feature off, please visit our Cookie Policy. If you register to use services via Facebook Connect, we may collect other types of information. These are all shown at the time you use Facebook to register.</p>
           </div>
  </div>
  </div>
  )
}

export default function Success() {
    return (
      <>
        <Header />
        <main>
            <Content />
        </main>
        <Footer />
      </>
    )
  }
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

function Content() {
  return (
    <div className="flex justify-center pt-0 pb-60">
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
    <div className="mt-10 max-w-2xl space-y-6 text-base">
            
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
            <p>This Privacy Policy applies to all of our websites and our mobile applications (“the Website”). In this Privacy Policy, when we refer to any of our Website, we mean any website or mobile application operated by or on behalf of SwiftCode Ltd.</p>
            <p>By accessing the Website, you agree to be bound by these terms and conditions whenever you access the Website on any device. This Privacy Policy forms part of and is incorporated into our Website Terms and Conditions. Any changes to this policy will be posted here. We reserve the right to vary this Privacy Policy from time to time and such changes shall become effective as soon as they are posted. Your continued use of the Website constitutes your agreement to all such changes. We are committed to protecting the personal information you give us and telling you how we use the information we gather about you.</p>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Why we collect information about you</h2>
            <p>We want to offer you a service which you want to use. We may use information about you to help us customise the Website, to remember you and to improve its usefulness to you. We may use this information to notify you about changes to the Website or products, services or promotions of ours and others (with your consent) that we think you might find of interest. It can also help us to choose articles and services we think will interest you</p>
            <p>Information about you helps us sell space to advertisers of products and services relevant to you so that we can continue to fund the Website through advertising and you can continue to use the Website for free.</p>
            <p>We may send you administrative and promotional emails relating to the Website and updates about the Website.</p>
            <p>In addition to the services we provide on this web site we may want to offer you goods and services provided by us and others (with your consent) which are of interest to you.</p>
            <p>We may personalise your visits to the Website and develop the design and style of the Website to improve the services provided to you. We may need to contact you to about a comment you have submitted or material you have posted on the Website or in order to verify your identity form time to time.</p>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">How we ensure privacy is maintained</h2>
            <p>We endeavor to ensure that your data is stored securely and to prevent unauthorised access. We have security measures in place to protect your information which we monitor regularly.</p>
            <p>Unfortunately, despite our measures, because of the nature of the Internet, we cannot guarantee that your information will remain at all times 100% secure. The continuing efforts of hackers to defeat even the newest of security systems means that we can never make this promise. Please be aware that if you disclose information on chat areas, your Profile page, comment areas, forums or other public services it may be possible for other people to use this information.</p>
            <p>We are not responsible for the disclosure of any information you post in this way.</p>
            <p>We comply with the Data Protection Act 1998 and the Regulation of Investigatory Powers Act 2000 and all other legislation which governs the maintenance of privacy in your information.</p>
            <p>The Website provides a number of links to web sites not operated by us or by companies associated with us. We take no responsibility for the use of any information about you which is collected as a result of your use of these websites and this privacy policy does not extend to any website operated by anybody other than us.</p>
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
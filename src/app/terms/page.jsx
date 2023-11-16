import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

function Content() {
  return (
    <div className="flex justify-center pt-0 pb-60">
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
    <div className="mt-10 max-w-2xl space-y-6 text-base">
            
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Terms & Conditions</h1>
            <p>By accessing the Website, you agree to be bound by these terms and conditions whenever you access the Website on any device. This Privacy Policy forms part of and is incorporated into our Website Terms and Conditions.</p>
            <p>Any changes to this policy will be posted here. We reserve the right to vary this Privacy Policy from time to time and such changes shall become effective as soon as they are posted. Your continued use of the Website constitutes your agreement to all such changes. We are committed to protecting the personal information you give us and telling you how we use the information we gather about you.</p>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Disclosing your information and consent</h2>
            <p>By using the Website, you agree that we may disclose your personal information to any company within Borne group of companies. We will not make use of your personal information for direct marketing activities, or supply this information to third parties for their direct marketing activities without your consent. By direct marketing activities, we mean the communication directly to particular individuals (by email, post or telephone) of any advertising or marketing material.</p>
            <p>If having given your consent you subsequently decide you no longer wish to receive direct marketing or information from us or our associated companies or third parties or no longer want us to pass your information to third parties, please notify us at the following email address: support@swiftcode.uk</p>
            <p>In particular, even where we have your consent we will only disclose your financial, credit card or bank details to our agents and/or third party suppliers of products or services on a need to know basis including, for example, in relation to the fulfilment of any e-commerce transactions.</p>
            <p>We may disclose details about use of the Website to other businesses e.g. to demonstrate patterns of use to advertisers and other business partners. The information we pass on will not include any personal information by which you may be identified.</p>
            <p>We compile anonymous records of user trends which we may make use of ourselves, or pass to our associated companies.</p>
            <p>We will comply with any court order requesting or requiring the disclosure of the identity or location of or any other information in relation to anyone who has accessed the Website and we may also disclose such information where we are advised by our lawyers that a court order would be granted requiring us to disclose it, even if no legal proceedings have been commenced in relation to the same.</p>
            <p>We endeavor to prevent unauthorised disclosures of your personal information by other people, but we are not responsible for any unauthorised disclosures or other breaches of security or for the actions of others if the information was passed to them with your authority or with the authority of anybody other than us or our associated companies.</p>
            <p>We may transfer, sell or assign any of the information described in this policy to third parties as a result of a sale, merger, consolidation, change of control, transfer of assets or reorganisation of our business.</p>
            <p>If you wish to receive a copy of the personal information we hold about you, or have any other queries or concerns about the way we are collecting and using your personal information, please write to us (including full details of your request) at:</p>
            <p>Office 3459 321-323 High Road Chadwell Heath, Essex, United Kingdom, RM6 6AX</p>
            <p>We may charge an administration fee (not exceeding the maximum permitted by law) in relation to fulfilling a request for access to personal information.</p>
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
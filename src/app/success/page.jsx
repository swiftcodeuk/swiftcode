import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Button } from '@/components/Button'

function Content() {
  return (
    <div className="flex justify-center pb-80 pt-40">
    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
    <div className="lg:pr-4">
        <center>
      <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">We&apos;re Grateful for Your Message</h2>
        <p className="mt-6">
        Thank you for reaching out to us! Rest assured, your message is in good hands and a member of our team will be responding promptly. While you await our reply, we invite you to explore our website further. Wishing you an excellent day ahead!
        </p>
      </div>
      <Button href="/" color="blue" className="mt-10">
      Go back
    </Button>
    </center>
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
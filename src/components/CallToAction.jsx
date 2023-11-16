import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.webp'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-10"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt="SwiftCode"
        width={2347}
        height={600}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
          Ready to build your app?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
          Transform your concept into reality with a team that prioritizes your goals and ensures a swift, successful launch.
          </p>
          <Button href="#contact" color="white" className="mt-10">
            Talk to us
          </Button>
        </div>
      </Container>
    </section>
  )
}

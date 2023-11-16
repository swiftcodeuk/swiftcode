'use client'

import { useEffect, useState } from 'react'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'
import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    title: 'Payroll',
    description:
      "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    image: screenshotPayroll,
  },
  {
    title: 'Claim expenses',
    description:
      "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    image: screenshotExpenses,
  },
  {
    title: 'VAT handling',
    description:
      "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    image: screenshotVatReturns,
  },
  {
    title: 'Reporting',
    description:
      'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
    image: screenshotReporting,
  },
]



export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  const features = [
  {
    name: 'A different approach',
    description: 'We take a different approach than most App development agencies. We don’t complicate things. We focus on your goals and provide a talented developer to help you reach them.',
  },
  { name: 'Tailored Solutions', description: 'Every project is unique, so we offer customized solutions tailored to your specific needs. Our dedicated team works closely with you to create a product that perfectly fits your vision.' },
  {
    name: 'A true collaboration',
    description: 'We focus on your goals, your budget, and your success. We take pride in our work and have the same goals as you – to see you be successful.',
  },
  {
    name: 'Transparent Process',
    description: 'Transparency is key to trust and success. We keep you in the loop throughout the development process with regular updates and open communication channels to ensure your project is progressing as expected.',
  },
  { name: 'Cutting-edge Technology', description: 'We stay ahead of the curve by embracing the latest technologies and industry standards. This ensures your app not only meets current trends but is also prepared for the future.' },
  { name: 'Post-Launch Support', description: 'Our relationship doesn’t end at launch. We’re here to support you with post-launch services like app maintenance, updates, and feature expansions to keep your app relevant and engaging.' },
  
]
  return (
    <section id="whatwedo">
      
       <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-blue-600">What we do</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Focused Development, Real Results</p>
            <p className="mt-6 text-base leading-7 text-gray-600">
            Designing beautiful mobile applications and responsive user interfaces. We have the talent you need to make this happen. We build Apps for small businesses and entrepreneurs turning ideas into reality fast enough to hit the market the right time.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-blue-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
      
    </section>
  )
}

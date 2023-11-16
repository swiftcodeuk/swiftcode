import Image from 'next/image'
import backgroundImage from '@/images/background-call-to-action.webp'

import { Container } from '@/components/Container'
const stats = [
    { id: 1, name: 'Android Apps Done', value: '20' },
    { id: 2, name: 'IOS Apps Done', value: '15' },
    { id: 3, name: 'Returing clients', value: '35' },
    { id: 4, name: 'Satisfaction rate', value: '100%' },
  ]
  
  
  export function Grid() {
    return (
    <section
        id="get-started-today"
        className="relative overflow-hidden bg-blue-600 py-10"
      >
        <Image
          className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
          src={backgroundImage}
          alt=""
          width={2347}
          height={600}
          unoptimized
        />
        <Container className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">That stats are in...</h2>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                  <dt className="text-sm font-semibold leading-6 text-gray-200">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        </Container>
     </section> 
    )
  }
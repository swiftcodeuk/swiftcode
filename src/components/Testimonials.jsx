import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'

const testimonials = [
  [
    {
      content:
        'I didn’t really understand how transforming my Website into an App could be so profitable for my business. My App is now consistent with the traffic that I receive and this creates a high conversion rate from enquireys. My brand and the message is not a quick sell it is more of a value proposition now..My App uses features on Andriod and iOS that I didn’t even know existed.',
      author: {
        name: 'Jesica Reight',
        role: 'Boston, Massachusetts',
        image: avatarImage1,
      },
    },
    {
      content:
        'My new App keeps traffic streaming into my inbox so I can heavily promote my product offerings which was what was lacking in our previous marketing plan. There is a real buzz in my Network now and prospective customers are engaged in my App rather then clicking through and leaving my Website. ',
      author: {
        name: 'Maria Markova',
        role: 'London, UK',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        'My new App keeps traffic streaming into my inbox so I can heavily promote my product offerings which was what was lacking in our previous marketing plan. There is a real buzz in my Network now and prospective customers are engaged in my App rather then clicking through and leaving my Website. ',
      author: {
        name: 'Mark Kein',
        role: 'Barcelona, Spain',
        image: avatarImage5,
      },
    },
    {
      content:
        "The App's localized content and language support have opened up international markets for our brand, removing barriers we hadn't even anticipated. Our sales have seen a remarkable boost, and the in-app analytics are a trove of data that helps us refine our marketing strategies. It feels like were not just keeping up with the market trends but setting them.",
      author: {
        name: 'Isabella Rossi',
        role: 'Rome, Italy',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        'Our custom App has been a pivotal tool in streamlining our business operations. The integration of scheduling and e-commerce functionalities has made it a powerhouse for efficiency. Moreover, the customer feedback feature within the App has provided priceless insights that have driven our product development in the right direction, fostering a community around our brand',
      author: {
        name: 'Peter Markov',
        role: 'Warsaw, Poland',
        image: avatarImage3,
      },
    },
    {
      content:
        "Transitioning to an App was initially daunting, but the increase in customer retention and satisfaction has been nothing short of remarkable. The App's intuitive design and personalized user experience have significantly outpaced my old website's performance, leading to an uptick in sales and a much more engaged customer base. It's evident that the convenience of an App has elevated my business to a new level.",
      author: {
        name: 'Sophie Lestrange',
        role: 'Sydney, Australia',
        image: avatarImage4,
      },
    },
  ],
]

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
          Client Success Stories
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          Nothing speaks louder than success. Here&apos;s what our clients have to say about partnering with us and the powerful apps we&apos;ve created together.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

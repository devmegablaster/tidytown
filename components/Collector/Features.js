import React from 'react'
import { Check } from 'tabler-icons-react'

const features = [
  'Powerful Online Protection',
  'Doorstep Collection',
  'Hastle Free Collection',
  'Instant Points',
  'Exciting Offers',
  'Assured Vouchers',
]

const RenderFeature = ({ feature }) => (
  <div className="flex space-x-3">
    <Check className="rounded-full bg-green-500 p-1 text-white" />
    <p>{feature}</p>
  </div>
)

function Features() {
  return (
    <div className="mt-20 grid w-full grid-cols-1 px-4 sm:grid-cols-2 sm:px-0">
      <img className="hidden w-full pl-10 sm:flex" src="Thinker.svg" alt="" />
      <div className="flex flex-col items-center justify-center">
        <div className="flex max-w-sm flex-col">
          <h2 className="text-3xl">Join us and Earn Monthly Wages!</h2>
          <p className="mt-4 font-light text-gray-600">
            Yes, This is true! Become our Collector Partner and Earn Monthly
            Wages!
          </p>
          <div className="mt-6 flex flex-col space-y-4">
            {features.map((feature) => {
              return <RenderFeature feature={feature} />
            })}
          </div>
        </div>
      </div>
      <img
        className="mt-10 flex w-10/12 pl-10 sm:hidden"
        src="Thinker.svg"
        alt=""
      />
    </div>
  )
}

export default Features

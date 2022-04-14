import React from 'react'

const QuickLinks = ({ text, route }) => (
  <div className="flex-grow">
    <button className="w-full rounded-xl bg-green-500 px-6 py-3 font-bold text-white duration-150 hover:scale-105 hover:bg-green-600 hover:shadow-lg active:scale-95">
      {text}
    </button>
  </div>
)

function Landing() {
  return (
    <div className="mt-10 grid w-full grid-cols-2">
      <div className="flex">
        <div className="w-1/4" />
        <div className="items-left flex flex-col justify-center">
          <h1 className="text-7xl font-bold text-gray-900">
            Waste
            <br />
            =Money?
          </h1>
          <p className="mt-6 max-w-md text-gray-700">
            Now disposing Waste will get you Geexy Points!
          </p>
          <div className="mt-6 flex w-full items-center justify-center space-x-6">
            <QuickLinks text={'Get Started'} />
            <QuickLinks text={'Sign In'} />
          </div>
        </div>
      </div>
      <img className="w-10/12 pr-10" src="ManThrowGarb.svg" alt="" />
    </div>
  )
}

export default Landing

import React from 'react'

const QuickLinks = ({ text, route }) => (
  <div className="flex-grow">
    <button className="w-full rounded-xl bg-green-500 px-4 py-2 font-bold text-white duration-150 hover:scale-105 hover:bg-green-600 hover:shadow-lg active:scale-95 sm:px-6 sm:py-3">
      {text}
    </button>
  </div>
)

function Landing() {
  return (
    <div className="mt-10 grid w-full grid-cols-1 sm:grid-cols-2">
      <div className="flex">
        <div className="w-1/12 sm:w-1/4" />
        <div className="items-left flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl md:text-7xl">
            Money
            <br />
            =Waste?
          </h1>
          <p className="mt-6 max-w-md text-gray-700">
            Now disposing Waste will get you Geexy Points!
          </p>
          <div className="mt-6 flex w-full items-center justify-center space-x-6 pr-10 sm:pr-0">
            <QuickLinks text={'Volunteer Us'} />
            <QuickLinks text={'Sign In'} />
          </div>
        </div>
      </div>
      <img
        className="mx-auto mt-10 w-full sm:mt-0 md:pr-10"
        src="Collecting.svg"
        alt=""
      />
    </div>
  )
}

export default Landing

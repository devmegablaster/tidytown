import Router from 'next/router'
import React from 'react'
import { MoodHappy } from 'tabler-icons-react'

function Volunteer() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center bg-gray-100 px-4 py-8 sm:px-0">
      <p className="font-bold text-gray-800">See TidyTown</p>
      <p className="mt-1 text-center text-gray-600">
        Now disposing segregated waste will get you Genz points!
      </p>

      <div className="mt-10 flex flex-col items-center justify-center space-x-1 space-y-2 sm:flex-row sm:space-y-0 md:space-x-2">
        <MoodHappy className=" h-8 w-8 rounded-full bg-green-500 p-1 text-white" />
        <h3 className="text-center text-xl sm:text-3xl md:text-left">
          Trusted by Thousands of Happy Customers
        </h3>
      </div>

      <div className="mt-10 flex w-10/12 flex-col items-center justify-between space-y-6 rounded-xl border border-green-500 bg-white px-6 py-5 shadow-lg sm:flex-row sm:space-y-0">
        <div className="flex max-w-md flex-col space-y-2">
          <h1 className="text-lg sm:text-2xl">Volunteer Us as a Collector!</h1>
          <h3 className="text-sm text-gray-400 sm:text-base">
            Volunteer Us as a Waste Collector and earn monthly wages!
          </h3>
        </div>
        <button
          onClick={() => {
            Router.push('/collector')
          }}
          className="rounded-xl bg-green-500 px-4 py-2 text-sm font-medium text-white duration-150 hover:scale-105 hover:bg-green-600 active:scale-95 sm:text-base"
        >
          Volunteer Us!
        </button>
      </div>
    </div>
  )
}

export default Volunteer

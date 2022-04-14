import React from 'react'
import { MoodHappy } from 'tabler-icons-react'

function Volunteer() {
  return (
    <div className="mt-16 flex flex-col items-center justify-center bg-gray-100 py-6">
      <p className="font-bold text-gray-800">See TidyTown</p>
      <p className="mt-1 text-gray-600">
        Now disposing segregated waste will get you Genz points!
      </p>

      <div className="mt-10 flex items-center justify-center space-x-2">
        <MoodHappy className="h-8 w-8 rounded-full bg-green-500 p-1 text-white" />
        <h3 className=" text-3xl">Trusted by Thousands of Happy Customers</h3>
      </div>

      <div className="mt-10 flex w-10/12 items-center justify-between rounded-xl border border-green-500 bg-white px-6 py-5 shadow-lg">
        <div className="flex max-w-md flex-col space-y-2">
          <h1 className="text-2xl">Volunteer Us as a Collector!</h1>
          <h3 className="text-gray-400">
            Volunteer Us as a Waste Collector and earn monthly wages!
          </h3>
        </div>
        <button className="rounded-xl bg-green-500 px-4 py-2 font-medium text-white duration-150 hover:scale-105 hover:bg-green-600 active:scale-95">
          Volunteer Us!
        </button>
      </div>
    </div>
  )
}

export default Volunteer

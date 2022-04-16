import React from 'react'

function Streak({ streak, total }) {
  return (
    <div className="mx-auto mt-10 flex w-11/12 items-center justify-center space-x-4 rounded-3xl bg-[#B7C67B] p-4">
      <div className="flex flex-col items-center justify-center text-center text-xs font-medium">
        <h2 className="mb-2 font-bold">Your Current Streak</h2>
        <h3>{streak} Days</h3>
      </div>
      <div className="h-full border border-white" />
      <div className="flex flex-col items-center justify-center text-center text-xs font-medium">
        <h2 className="mb-2 font-bold">Total Waste Collected</h2>
        <h3>{total}Kg</h3>
      </div>
    </div>
  )
}

export default Streak

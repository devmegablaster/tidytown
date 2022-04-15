import React from 'react'

function Multiplier({ multiplier }) {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-6 rounded-xl bg-[#B2DA8E] p-16 md:w-1/3">
      <h2 className="text-2xl font-bold text-gray-800">Multiplier</h2>
      <h3>{multiplier} / 2.00</h3>
      <div className=" w-full rounded-full bg-gray-700">
        <div className={`w-1/4 rounded-full bg-green-500 text-transparent`}>
          A
        </div>
      </div>
    </div>
  )
}

export default Multiplier

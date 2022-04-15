import React from 'react'

function Points({ points, setActive }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-between space-y-6 rounded-xl bg-[#B2DA8E] px-6 py-16 md:w-1/3">
      <h1 className="flex items-end text-3xl text-black">
        <img src="genz.svg" className="h-10" alt="Loading..." />
        enz Points
      </h1>
      <h3 className="rounded-full border-2 border-gray-800 px-4 py-2">
        {points}
      </h3>
      <h3
        className="cursor-pointer justify-self-end text-xl duration-100 hover:text-black"
        onClick={() => {
          setActive([0, 1, 0, 0])
        }}
      >
        Redeem Points
      </h3>
    </div>
  )
}

export default Points

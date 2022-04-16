import React from 'react'
import { Box } from 'tabler-icons-react'

function PickUp({ setActive }) {
  return (
    <div className="mx-auto mt-10 flex w-11/12 flex-col rounded-xl bg-[#EAF4F3] p-4">
      <div className="flex items-start space-x-4">
        <div className="rounded-xl bg-[#99E7DF] p-2">
          <Box />
        </div>
        <div className="flex flex-col">
          <h2 className="font-medium text-[#3E2BA7]">Pick Up Waste!</h2>
          <p className="text-xs font-medium text-gray-600">
            Be a Green Warrior! Collect waste on time.
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          setActive([0, 1, 0])
        }}
        className="mt-2 mr-6 self-end rounded-lg bg-[#B7C67B] px-6 py-1 font-bold text-white"
      >
        GO
      </button>
    </div>
  )
}

export default PickUp

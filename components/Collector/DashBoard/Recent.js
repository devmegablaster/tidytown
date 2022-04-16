import React from 'react'
import { Box, History } from 'tabler-icons-react'
import RecentCard from './RecentCard'

function Recent({ setActive, changes }) {
  return (
    <div className="mx-auto mt-10 flex w-11/12 flex-col rounded-xl bg-[#EAF4F3] p-4">
      <div className="flex items-start space-x-4">
        <div className="rounded-xl bg-[#99E7DF] p-2">
          <History />
        </div>
        <div className="flex flex-col">
          <h2 className="font-medium text-[#3E2BA7]">Recent Collections</h2>
          <p className="text-xs font-medium text-gray-600">
            Here are your recent Good Deeds!
          </p>
        </div>
      </div>
      {changes.map((change) => {
        return (
          <RecentCard
            uid={change.userId}
            type={change.type}
            points={change.points}
          />
        )
      })}
    </div>
  )
}

export default Recent

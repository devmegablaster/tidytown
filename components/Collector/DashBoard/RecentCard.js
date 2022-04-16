import React from 'react'

function RecentCard({ uid, type, points }) {
  return (
    <div className="mt-2 flex w-full flex-col rounded-xl bg-green-200 p-3 px-4">
      <h1 className="font-bold text-green-500">User: {uid}</h1>
      <h1 className="font-light text-gray-700">
        Action: {type == 'collect' ? 'Collection of Waste' : 'Invalid'}
      </h1>
      <h1 className="text-gray-900">{points || '-'} Points Awarded!</h1>
    </div>
  )
}

export default RecentCard

import React from 'react'
import Multiplier from './Multiplier'
import Points from './Points'
import PointsHistory from './PointsHistory'
import QRCode from './QRCode'

function Dashboard({ user, setActive }) {
  return (
    <div className="h-screen w-full overflow-y-scroll px-10 py-10 font-medium text-gray-700 lg:w-4/5">
      <h1 className="pl-4 text-4xl">Welcome 👋🏻</h1>
      <h3 className="pl-4 text-4xl text-gray-900">{user.name}</h3>
      <p className="mt-4 pl-4 font-bold">Dashboard Overview</p>
      <div className="flex w-full flex-col space-y-4">
        <div className="mt-10 flex w-full space-x-6">
          <Multiplier multiplier={1.45} />
          <QRCode uid={user.uid} />
          <Points points={20} setActive={setActive} />
        </div>
        <PointsHistory />
      </div>
    </div>
  )
}

export default Dashboard

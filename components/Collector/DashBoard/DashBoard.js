import React, { useState } from 'react'
import NavBar from './NavBar'
import PickUp from './PickUp'
import Recent from './Recent'
import Streak from './Streak'

function DashBoard({ user, setActive }) {
  console.log(user.photoURL)
  return (
    <div className="flex h-screen w-screen flex-col pb-10">
      <div className="mx-auto mt-10 flex w-11/12 items-center space-x-4">
        <div className="w-1/6 bg-gray-100">
          <img src={user.photoURL} alt="User" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-medium text-gray-600">
            Hi, {user.name} 👋🏻
          </h1>
          <h3 className="text-sm font-medium text-gray-400">
            Have you collected the Trash Today!?
          </h3>
        </div>
      </div>
      <Streak streak={user.streak} total={user.total} />
      <PickUp setActive={setActive} />
      <Recent changes={user.changes} />
    </div>
  )
}

export default DashBoard

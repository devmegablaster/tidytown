import React from 'react'
import { Edit } from 'tabler-icons-react'
import SidebarRoutes from './SidebarRoutes'
import firebase from 'firebase'

function Sidebar({ user, active, setActive }) {
  return (
    <div
      className="hidden w-1/5
flex-col items-center justify-center bg-gradient-to-b from-[#BCD829] to-[#57AE09]
lg:flex"
    >
      <img src="tidytown.svg" alt="" className="h-10 justify-self-start" />
      <div className="relative mt-12 rounded-lg bg-white bg-opacity-20 p-6">
        <img src={user.photoURL} alt="" className="h-16 rounded-lg" />
        <button className="absolute -bottom-2 -right-2 rounded-full border border-white bg-purple-500 p-[5px] text-white duration-100 hover:scale-105 hover:bg-purple-600 active:scale-95">
          <Edit />
        </button>
      </div>
      <h2 className="mt-4 text-xl font-medium text-white">{user.name}</h2>

      <SidebarRoutes active={active} setActive={setActive} />
      <h2
        onClick={() => {
          firebase.auth().signOut()
        }}
        className="mt-10 cursor-pointer rounded-xl bg-white px-2 py-1 text-sm font-bold text-red-500 duration-100 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md"
      >
        Sign Out
      </h2>
    </div>
  )
}

export default Sidebar

import React from 'react'
import { Edit } from 'tabler-icons-react'
import SidebarRoutes from './SidebarRoutes'

function Sidebar({ user, active, setActive }) {
  return (
    <div
      className="hidden w-1/5
flex-col items-center justify-center bg-gradient-to-b from-[#BCD829] to-[#57AE09]
lg:flex"
    >
      <img src="tidytown.svg" alt="" className="h-10" />
      <div className="relative mt-8 rounded-lg bg-white bg-opacity-20 p-6">
        <img src={user.photoURL} alt="" className="h-16 rounded-lg" />
        <button className="absolute -bottom-2 -right-2 rounded-full border border-white bg-purple-500 p-[5px] text-white duration-100 hover:scale-105 hover:bg-purple-600 active:scale-95">
          <Edit />
        </button>
      </div>
      <h2 className="mt-4 text-xl font-medium text-white">{user.name}</h2>
      <SidebarRoutes active={active} setActive={setActive} />
    </div>
  )
}

export default Sidebar

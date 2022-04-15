import React, { useState } from 'react'
import { Edit, Menu } from 'tabler-icons-react'
import SidebarRoutes from './SidebarRoutes'
import firebase from 'firebase'
import { Burger } from '@mantine/core'

function Sidebar({ user, active, setActive }) {
  const [opened, setOpened] = useState(false)
  return (
    <>
      <div
        className={`sticky top-0 left-0 right-0 flex items-center justify-between bg-green-200 px-4 py-3 shadow-lg lg:hidden`}
      >
        <img src="tidytown.svg" className="h-8" alt="" />
        <Burger opened={opened} onClick={() => setOpened(!opened)} />
      </div>
      <div
        className={`${
          opened ? 'sticky top-0 bottom-0 flex pt-2' : 'hidden'
        } h-screen w-full
flex-col items-center justify-center bg-gradient-to-b from-[#BCD829] to-[#57AE09] lg:flex
lg:w-1/5`}
      >
        <img
          src="tidytown.svg"
          alt=""
          className="hidden h-10 justify-self-start lg:flex"
        />
        <div className="relative mt-12 rounded-lg bg-white bg-opacity-30 p-6">
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
          className="mt-10 cursor-pointer rounded-xl bg-white px-4 py-2 text-sm font-bold text-red-500 duration-100 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-md"
        >
          Sign Out
        </h2>
      </div>
    </>
  )
}

export default Sidebar

import React from 'react'
import { Home, Qrcode, Settings } from 'tabler-icons-react'

function NavBar({ active, setActive }) {
  const NavBtn = ({ text, icon, index }) => (
    <button
      className={`${active[index] ? 'text-green-500' : 'text-gray-500'
        } flex flex-col items-center justify-center`}
      onClick={() => {
        const arr = [0, 0, 0]
        arr[index] = 1
        setActive(arr)
      }}
    >
      {icon}
      <p>{text}</p>
    </button>
  )
  return (
    <div className="absolute bottom-0 left-0 right-0 z-50 flex justify-between border-t-2 border-gray-300 bg-white px-8 py-4 shadow-2xl">
      <NavBtn text={'Home'} index={0} icon={<Home />} />
      <NavBtn text={'Collect Waste'} index={1} icon={<Qrcode />} />
      <NavBtn text={'Settings'} index={2} icon={<Settings />} />
    </div>
  )
}

export default NavBar

import React from 'react'
import { Coin, Help, History, Home } from 'tabler-icons-react'

function SidebarRoutes({ active, setActive }) {
  const BtnRoute = ({ index, text, icon }) => (
    <div
      onClick={() => {
        console.log('HEYY')
        const arr = [0, 0, 0, 0]
        arr[index] = 1
        setActive(arr)
      }}
    >
      <button
        className={`${
          active[index]
            ? 'border-green-800'
            : 'border-transparent hover:border-green-300'
        } flex w-full items-center space-x-4 border-l-[10px] py-4 pl-5 text-lg font-bold text-white duration-150`}
      >
        {icon}
        <p>{text}</p>
      </button>
    </div>
  )

  return (
    <div className="mt-10 flex w-full flex-col space-y-4">
      <BtnRoute index={0} icon={<Home />} text={'Dashboard'} />
      <BtnRoute index={1} icon={<Coin />} text={'Redeem Coins'} />
      <BtnRoute index={2} icon={<History />} text={'Points History'} />
      <BtnRoute index={3} icon={<Help />} text={'Help'} />
    </div>
  )
}

export default SidebarRoutes

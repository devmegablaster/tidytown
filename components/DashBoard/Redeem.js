import React from 'react'
import RedeemCard from './RedeemCard'

function Redeem({ user }) {
  return (
    <div className="h-screen w-full overflow-y-scroll px-10 py-10 font-medium text-gray-700 lg:w-4/5">
      <h1 className="pl-4 text-4xl">Welcome 👋🏻</h1>
      <h3 className="pl-4 text-4xl text-gray-900">{user.name}</h3>
      <p className="mt-4 flex pl-4 font-bold">
        <p className="mr-1">Redeem</p> <img src="genz.svg" alt="" />
        enz Points!
      </p>
      <div className="ml-4 mt-6 flex w-fit rounded-full bg-[#B2DA8E] px-4 py-2">
        <p className="mr-2 font-bold text-gray-900">50</p>
        <img src="genz.svg" alt="" />
        enz Coins Left
      </div>
      <div className="mt-10 grid w-full grid-cols-3">
        <RedeemCard
          text={'Boat 10% discount on Headphones and PowerBanks!'}
          points={40}
          image="tidytown.svg"
        />
      </div>
    </div>
  )
}

export default Redeem

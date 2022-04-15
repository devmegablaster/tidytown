import React from 'react'

function RedeemCard({ text, image, points }) {
  return (
    <div className="flex flex-col justify-center space-y-10 rounded-xl bg-[#B2DA8E] p-8">
      <h1 className="text-xl font-medium">{text}</h1>
      <img src={image} className="h-32 self-center" alt="Offer image" />
      <div className="flex items-center justify-between">
        <p className="flex rounded-full bg-green-700 px-4 py-2 text-white">
          {points} Coins
        </p>
        <button className="rounded-full bg-white px-4 py-2 duration-100 hover:scale-105 hover:shadow-xl active:scale-95 active:shadow-sm">
          Redeem
        </button>
      </div>
    </div>
  )
}

export default RedeemCard

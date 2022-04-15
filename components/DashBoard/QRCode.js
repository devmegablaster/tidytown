import React from 'react'

function QRCode({ uid, setExpand }) {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4 rounded-xl bg-[#B2DA8E] p-8 md:w-1/3">
      <h1 className="text-2xl font-bold text-gray-800">QR Code</h1>
      <img
        src={`https://api.qrserver.com/v1/create-qr-code/?data=${uid}&amp;size=100x100`}
        alt=""
        className="h-32 w-32 cursor-pointer"
        onClick={() => {
          setExpand(true)
        }}
      />
      <h3
        className="cursor-pointer duration-100 hover:text-black"
        onClick={() => setExpand(true)}
      >
        Click to Expand!
      </h3>
    </div>
  )
}

export default QRCode

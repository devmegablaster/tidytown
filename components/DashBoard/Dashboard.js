import React, { useState } from 'react'
import { Download } from 'tabler-icons-react'
import Multiplier from './Multiplier'
import Points from './Points'
import PointsHistory from './PointsHistory'
import QRCode from './QRCode'

function Dashboard({ user, setActive }) {
  const [expand, setExpand] = useState(false)
  useEffect(() => {
    if(user.changes.length > 0) {
     const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are an environmental expert providing tips to reduce waste generation and improve sustainable practices.',
          },
          {
            role: 'user',
            content: `Based on the user's recent waste data: ${JSON.stringify(user.changes)}, please provide personalized tips to reduce waste and other environmental suggestions.`,
          },
        ],
      }),
    });
    }
  }, [user])
  if (!expand) {
    return (
      <div className="h-screen w-full overflow-y-scroll px-10 py-10 font-medium text-gray-700 lg:w-4/5">
        <h1 className="pl-4 text-4xl">Welcome 👋🏻</h1>
        <h3 className="pl-4 text-4xl text-gray-900">{user.name}</h3>
        <p className="mt-4 pl-4 font-bold">Dashboard Overview</p>
        <div className="flex w-full flex-col space-y-4">
          <div className="mt-10 flex w-full flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
            <Multiplier multiplier={user.multiplier} />
            <QRCode uid={user.uid} setExpand={setExpand} />
            <Points points={user.points} setActive={setActive} />
          </div>
          <PointsHistory changes={user.changes} />
        </div>
        <div className="absolute bottom-3 right-3 bg-orange-500 rounded-full h-14 w-14 animate-pulse"/>
      </div>
    )
  } else {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center space-y-8 overflow-y-scroll px-10 py-10 font-medium text-gray-700 lg:w-4/5">
        <div className="flex items-center space-x-2 text-3xl">
          <p>QR Code</p>{' '}
          <a
            href={`https://api.qrserver.com/v1/create-qr-code/?data=${user.uid}&amp;size=2000x2000`}
            download
            className="rounded-full p-2 duration-100 hover:bg-gray-200"
          >
            <Download className="cursor-pointer rounded-full text-[#57AE09] " />
          </a>
        </div>
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?data=${user.uid}&amp;size=2000x2000`}
          alt=""
          className="w-1/2"
        />
        <div
          className="cursor-pointer rounded-full bg-green-500 px-3 py-2 text-xl font-medium text-white duration-100 hover:scale-105 hover:bg-green-600 hover:shadow-xl active:scale-95 active:shadow-md"
          onClick={() => setExpand(false)}
        >
          Return to Dashboard!
        </div>
      </div>
    )
  }
}

export default Dashboard

import React, { useState, useEffect } from 'react'
import { Download } from 'tabler-icons-react'
import Multiplier from './Multiplier'
import Points from './Points'
import PointsHistory from './PointsHistory'
import QRCode from './QRCode'

function Dashboard({ user, setActive }) {
  const [expand, setExpand] = useState(false)
  const [showTips, setShowTips] = useState(false)
  const [tips, setTips] = useState('')
  const [openTipsPopup, setOpenTipsPopup] = useState(false)

  useEffect(() => {
    async function fetchData() {
      if (user.changes.length > 1 && !localStorage.getItem('tipsgiven')) {
        const wasteSummary = user.changes.slice(1).map(entry => {
          return `Date: ${new Date(entry.timestamp).toLocaleDateString()}, Paper: ${entry.paper} kg, E-waste: ${entry.ewaste} kg, Organic: ${entry.organic} kg`
        }).join('\n')

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer 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`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: `You are a helpful assistant focusing on analyzing waste patterns. Review only the type, amount, and dates of recent waste generation. Provide conversational advice based on recent trends, including personalized suggestions to reduce waste types generated in higher amounts. Just give the tips no need to talk to the user. Also give the tips in a friendly and helpful manner. Dont give more than 3 tips. Give line break after each tip with backslash n. I am using the data you return in dangerouslySetInnerHTML.`,
              },
              {
                role: 'user',
                content: `Here is the recent waste generation data:\n${wasteSummary}`,
              },
            ],
          }),
        })

        const data = await response.json()
        const tips = data.choices[0].message.content

        setShowTips(true)
        setTips(tips)
        localStorage.setItem('tipsgiven', tips)
      }
    }

    fetchData()
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
        {showTips && (
          <div
            onClick={() => {
              setOpenTipsPopup(true)
              setShowTips(false)
            }}
            className="absolute bottom-3 right-3 bg-orange-500 rounded-full h-20 w-20 animate-pulse cursor-pointer text-white font-bold text-2xl text-center flex items-center justify-center"
          >
            Tips
          </div>
        )}
        {openTipsPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg w-1/2">
              <h1 className="text-2xl font-bold">TidyTown AI Tips</h1>
              {/* Render Tips which are in markdown points format */}
              <div
                className="mt-4 text-lg"
                dangerouslySetInnerHTML={{ __html: tips }}
              />
              <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setOpenTipsPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
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
            <Download className="cursor-pointer rounded-full text-[#57AE09]" />
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

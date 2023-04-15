import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import { QrReader } from 'react-qr-reader'
import db from '../../../firebase'
import Collect from './Collect'

const RenderScannedUser = ({ setCon, name, society, block, house }) => {
  return (
    <div className="mx-auto flex w-11/12 flex-col items-center justify-center space-y-4">
      <div
        className={`${name ? 'flex' : 'hidden'
          } mx-auto w-full items-center justify-between rounded-xl bg-gray-300 p-4`}
      >
        <div className="flex flex-col">
          <h1 className="text-sm font-bold text-gray-500">Scanned User:</h1>
          <h1 className="font-bold text-gray-700">{name}</h1>
          <h3 className="font-light text-gray-500">
            {house}, {block}, {society}
          </h3>
        </div>
        <button
          onClick={() => setCon(true)}
          className={`${name ? 'flex' : 'hidden'
            } rounded-lg bg-green-500 p-2 text-white`}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

function Qr({ user }) {
  const [scannedUser, setScannedUser] = useState({})
  const [data, setData] = useState('')
  const [con, setCon] = useState(false)
  const [red, setRed] = useState(false)

  if (red) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <img
          src="https://gist.githubusercontent.com/devmegablaster/2adfdaddcf240e20f87f2cf982f444f9/raw/f3b39d0df116d9c07b59be040a89107ef516ab93/earth.svg"
          alt=""
          className="w-1/2"
        />
        <h1 className="mt-10 text-xl font-medium text-gray-600">
          Thanks for the
        </h1>
        <h1 className="text-xl font-bold text-green-500">Waste Collection!</h1>
        <h3 className="mt-5 text-lg font-light text-gray-400">
          One step closer...to a TidyTown!
        </h3>
        <button
          onClick={() => {
            Router.push('/collector/dashboard')
          }}
          className="mt-5 rounded-xl bg-green-500 p-2 text-white"
        >
          Return To Dashboard
        </button>
      </div>
    )
  }

  if (con) {
    return (
      <div className="h-screen w-screen">
        <Collect scannedUser={scannedUser} user={user} setRed={setRed} />
      </div>
    )
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="mx-auto mt-5 flex w-11/12 items-center space-x-4">
        <div className="w-1/6 bg-gray-100">
          <img src={user.photoURL} alt="User" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-medium text-gray-600">
            Hi, {user.name} 👋🏻
          </h1>
          <h3 className="text-sm font-medium text-gray-400">
            Scan The User's QR Code to collect the Waste!
          </h3>
        </div>
      </div>
      <QrReader
        constraints={{
          facingMode: 'environment',
        }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text)

            if (result.text) {
              db.collection('Users')
                .doc(result.text)
                .get()
                .then((data) => {
                  if (data.exists) {
                    setScannedUser(data.data())
                  }
                })
            }
          }

          if (!!error) {
            console.info(error)
          }
        }}
        style={{ width: '100%' }}
        className="p-2"
      />
      <RenderScannedUser
        name={scannedUser.name}
        block={scannedUser.block}
        house={scannedUser.houseNo}
        society={scannedUser.society}
        setCon={setCon}
      />
    </div>
  )
}

export default Qr

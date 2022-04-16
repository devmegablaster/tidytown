import React, { useEffect, useState } from 'react'
import { QrReader } from 'react-qr-reader'
import db from '../../../firebase'

const RenderScannedUser = ({ name, society, block, house }) => {
  return (
    <div className="mx-auto flex w-11/12 flex-col items-center justify-center space-y-4">
      <div
        className={`${
          name ? 'flex' : 'hidden'
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
          className={`${
            name ? 'flex' : 'hidden'
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
  const handleError = (err) => {
    console.log(err)
  }

  const handleScan = (data) => {
    console.log(data)
  }

  const [data, setData] = useState('')
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
      />
    </div>
  )
}

export default Qr

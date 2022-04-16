import React, { useState } from 'react'
import db from '../../../firebase'

const RenderInputs = ({ setVal, val, image, visible, text }) => (
  <div
    className={`${
      visible ? 'flex' : 'hidden'
    } mx-auto w-11/12 items-center space-x-10`}
  >
    <div className="flex w-2/3 items-center justify-start space-x-2 ">
      <img src={image} className="w-10" alt="" />
      <p>{text}</p>
    </div>
    <div className="flex items-end justify-end space-x-1">
      <input
        value={val}
        onChange={(e) => {
          setVal(e.target.value)
        }}
        type="number"
        className="w-4/12 border border-green-500 px-1 py-1 text-center"
      />
      <p className="text-lg font-light">kg</p>
    </div>
  </div>
)

function Collect({ user, scannedUser, setRed }) {
  const [paper, setPaper] = useState(0)
  const [organic, setOrganic] = useState(0)
  const [ewaste, setEwaste] = useState(0)
  const [hasPaper, setHasPaper] = useState(true)
  const [hasOrganic, setHasOrganic] = useState(false)
  const [hasEwaste, setHasEwaste] = useState(false)
  console.log(user)
  return (
    <div className="h-screen w-screen overflow-scroll">
      <img
        src="https://gist.githubusercontent.com/MEGA-BLASTER2004/6b859e0fbf523e1eeb72caa3a03b9fb4/raw/167b4e972d9bdae559970314fa2b41e7b76b527a/FillDetails.svg"
        alt=""
        className="-ml-3 w-full"
      />
      <div className="mt-2 flex w-full space-x-4 px-4">
        <div className="mx-auto mt-4 flex w-1/2 flex-col items-center justify-center rounded-xl bg-green-200 p-4">
          <h1 className="mb-2 text-xl font-bold">Scanned User:</h1>
          <h1 className="text-lg font-medium">{scannedUser.name}</h1>
          <h3 className="text-base font-light text-gray-500">
            {scannedUser.houseNo}, {scannedUser.block}, {scannedUser.society}
          </h3>
          <h3 className="text-base text-gray-700">
            {scannedUser.points} Points
          </h3>
          <h3 className="text-base text-gray-700">{scannedUser.phone}</h3>
        </div>
        <div className="mx-auto mt-4 flex w-1/2 flex-col items-center justify-center rounded-xl bg-green-200 p-4">
          <h1 className="mb-2 text-xl font-bold">Collector:</h1>
          <h1 className="text-lg font-medium">{user.name}</h1>
          <h3 className="text-base font-light text-gray-500">{user.city}</h3>
          <h3 className="text-base text-gray-700">
            {user.ratings || 5} Star Ratings!
          </h3>
          <h3 className="text-base text-gray-700">{user.phone}</h3>
        </div>
      </div>
      <div className="mx-auto mt-5 flex w-11/12 flex-col pb-5">
        <h1 className="text-lg font-medium">Select The type(s) of Waste</h1>
        <div className="mt-2 flex w-full flex-col space-y-4">
          <div className="flex w-full justify-between space-x-4">
            <button
              onClick={() => {
                setHasPaper(!hasPaper)
                setPaper(0)
              }}
              className={`flex ${
                hasPaper ? 'bg-gray-100' : ''
              } w-1/2 flex-col items-center space-y-1 rounded-xl py-8`}
            >
              <img
                src="https://gist.githubusercontent.com/MEGA-BLASTER2004/fbe1b051de74b91f6b236abdfa7379ae/raw/b27309ecb43b4b168c82e98547923c19c4760632/plastic.svg"
                alt=""
              />
              <p className="text-gray-500">Paper Waste</p>
            </button>
            <button
              onClick={() => {
                setHasOrganic(!hasOrganic)
                setOrganic(0)
              }}
              className={`flex ${
                hasOrganic ? 'bg-gray-100' : ''
              } w-1/2 flex-col items-center space-y-1 rounded-xl py-8`}
            >
              <img
                src="https://gist.githubusercontent.com/MEGA-BLASTER2004/5bf4cb98a1702e0ae0ad5df39826b09e/raw/668cf6f358586d9fe35992d7012fa32523af9052/organic.svg"
                alt=""
              />
              <p className="text-gray-500">Organic Waste</p>
            </button>
          </div>
          <button
            onClick={() => {
              setHasEwaste(!hasEwaste)
              setEwaste(0)
            }}
            className={`mx-auto flex ${
              hasEwaste ? 'bg-gray-100' : 'bg-white'
            } w-1/2 flex-col items-center space-y-1 rounded-xl py-8`}
          >
            <img
              src="https://gist.githubusercontent.com/MEGA-BLASTER2004/f899f1461e6bd7d2b1af6833f020b295/raw/0f61f5c23407483750c60ad2d4796cd1dd62c340/ewaste.svg"
              alt=""
            />
            <p className="text-gray-500">E-Waste</p>
          </button>
        </div>
      </div>

      <div className="mx-auto mt-5 flex w-11/12 flex-col space-y-5 pb-10">
        <h1 className="text-lg font-medium text-gray-700">Amount of Waste</h1>
        <RenderInputs
          val={paper}
          setVal={setPaper}
          visible={hasPaper}
          text={'Paper and Plastic'}
          image={
            'https://gist.githubusercontent.com/MEGA-BLASTER2004/fbe1b051de74b91f6b236abdfa7379ae/raw/b27309ecb43b4b168c82e98547923c19c4760632/plastic.svg'
          }
        />
        <RenderInputs
          val={organic}
          setVal={setOrganic}
          visible={hasOrganic}
          text={'Organic'}
          image={
            'https://gist.githubusercontent.com/MEGA-BLASTER2004/5bf4cb98a1702e0ae0ad5df39826b09e/raw/668cf6f358586d9fe35992d7012fa32523af9052/organic.svg'
          }
        />
        <RenderInputs
          val={ewaste}
          setVal={setEwaste}
          visible={hasEwaste}
          text={'Ewaste'}
          image={
            'https://gist.githubusercontent.com/MEGA-BLASTER2004/f899f1461e6bd7d2b1af6833f020b295/raw/0f61f5c23407483750c60ad2d4796cd1dd62c340/ewaste.svg'
          }
        />
        <button
          onClick={() => {
            db.collection('Users')
              .doc(scannedUser.uid)
              .update({
                points: paper * 2 + organic * 1 + ewaste * 10,
                changes: firebase.firestore.FieldValue.arrayUnion({
                  type: 'collect',
                  paper,
                  organic,
                  ewaste,
                  points: paper * 2 + organic * 1 + ewaste * 10,
                  timestamp: new Date().now(),
                }),
              })
              .then(() => {
                db.collection('Collectors')
                  .doc(user.uid)
                  .update({
                    total: paper + organic + ewaste,
                    changes: firebase.firestore.FieldValue.arrayUnion({
                      type: 'collect',
                      paper,
                      organic,
                      ewaste,
                      points: paper * 2 + organic * 1 + ewaste * 10,
                      timestamp: new Date().now(),
                    }),
                  })
                  .then(() => {
                    setRed(true)
                  })
              })
          }}
          className="mx-auto mt-4 w-1/3 rounded-xl bg-green-500 p-2 text-xl font-light text-white"
        >
          Collect!
        </button>
      </div>
    </div>
  )
}

export default Collect

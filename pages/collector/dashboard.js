import React, { useState, useEffect } from 'react'
import { Loader } from '@mantine/core'
import db from '../../firebase'
import firebase from 'firebase'
import DashBoard from '../../components/Collector/DashBoard/DashBoard'
import NavBar from '../../components/Collector/DashBoard/NavBar'
import Qr from '../../components/Collector/DashBoard/Qr'

function dashboard() {
  const [emailVerified, setEmailVerified] = useState(true)
  const [isVerified, setIsVerified] = useState(true)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({ loading: true })
  const [active, setActive] = useState([1, 0, 0])
  useEffect(() => {
    if (user.loading) {
      firebase.auth().onAuthStateChanged(async (user) => {
        if (!user) {
          Router.push('/collector/signin')
        } else if (!user.emailVerified) {
          setEmailVerified(false)
        }
        if (user) {
          db.collection('Collectors')
            .doc(user.uid)
            .get()
            .then((data) => {
              if (data.exists) {
                const userData = data.data()
                userData.photoURL = user.photoURL
                setIsVerified(userData.verified)
                setUser(userData)
                setLoading(false)
              } else {
                firebase.auth().signOut()
              }
            })
        }
      })
    }
  }, [user])
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader color="green" size="xl" />
      </div>
    )
  }

  if (!emailVerified) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <img
          src="https://gist.githubusercontent.com/MEGA-BLASTER2004/4c4dbac51a6847480da5b89c9829f370/raw/ce89721ecc75a307c08bfd01663fba7515dc2de8/tidytown.svg"
          className="mb-10 h-10 "
          alt=""
        />
        <div className="flex w-10/12 flex-col space-y-4 rounded-lg border border-green-500 px-4 py-10 text-center shadow-xl md:w-1/3">
          <h1 className="text-3xl text-green-500">Account Created!</h1>
          <p className=" text-gray-500">
            Please Verify your Email Address to continue!
          </p>
        </div>
      </div>
    )
  }

  if (!isVerified) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <img
          src="https://gist.githubusercontent.com/MEGA-BLASTER2004/4c4dbac51a6847480da5b89c9829f370/raw/ce89721ecc75a307c08bfd01663fba7515dc2de8/tidytown.svg"
          className="mb-10 h-10 "
          alt=""
        />
        <div className="flex w-10/12 flex-col space-y-4 rounded-lg border border-green-500 px-4 py-10 text-center shadow-xl md:w-1/3">
          <h1 className="text-3xl text-green-500">Account Created!</h1>
          <p className=" text-gray-500">
            Our Officials will verify Your account to get Started!...You will
            receive an Email once your account is verified successfully!
          </p>
        </div>
      </div>
    )
  }

  if (isVerified) {
    return (
      <div className="h-screen w-screen">
        {active[0] ? <DashBoard user={user} /> : <Qr user={user} />}
        <NavBar active={active} setActive={setActive} />
      </div>
    )
  }
}

export default dashboard

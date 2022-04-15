import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import Router from 'next/router'
import db from '../firebase'
import { Loader } from '@mantine/core'
import Sidebar from '../components/DashBoard/Sidebar'
import Dashboard from '../components/DashBoard/Dashboard'
import Redeem from '../components/DashBoard/Redeem'

function dashboard() {
  const [isVerified, setIsVerified] = useState(true)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({ loading: true })
  const [active, setActive] = useState([1, 0, 0, 0])
  useEffect(() => {
    if (user.loading) {
      firebase.auth().onAuthStateChanged(async (user) => {
        if (!user) {
          Router.push('/login')
        }
        if (!user.emailVerified) {
          setIsVerified(false)
        }

        db.collection('Users')
          .doc(user.uid)
          .get()
          .then((data) => {
            const userData = data.data()
            userData.photoURL = user.photoURL
            setUser(userData)
            setLoading(false)
          })
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

  if (!isVerified) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <img src="tidytown.svg" className="mb-10 h-10 " alt="" />
        <div className="flex w-10/12 flex-col space-y-4 rounded-lg border border-green-500 px-4 py-10 text-center shadow-xl md:w-1/3">
          <h1 className="text-3xl text-green-500">Account Created!</h1>
          <p className=" text-gray-500">
            Please Verify your Email Address to continue!
          </p>
        </div>
      </div>
    )
  }

  if (isVerified) {
    return (
      <div className="flex h-screen w-screen overflow-hidden">
        <Sidebar user={user} active={active} setActive={setActive} />
        {active[0] ? (
          <Dashboard user={user} setActive={setActive} />
        ) : (
          <Redeem user={user} />
        )}
      </div>
    )
  }
}

export default dashboard

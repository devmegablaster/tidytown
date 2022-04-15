import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SignIn from '../components/SignIn/SignIn'
import { Loader } from '@mantine/core'
import db, { app } from '../firebase'
import firebase from 'firebase'
import Router from 'next/router'

function signin() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        db.collection('Users')
          .doc(user.uid)
          .get()
          .then((data) => {
            if (data.exists) {
              Router.push('/dashboard')
            } else {
              setLoading(false)
              firebase.auth().signOut()
            }
          })
      } else {
        setLoading(false)
      }
    })
  })
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader color="green" size="xl" />
      </div>
    )
  } else {
    return (
      <div className="h-screen w-screen overflow-y-scroll">
        <Header />
        <div className="flex h-full w-full flex-col md:flex-row">
          <img src="SignIn.svg" className="w-0 pb-20 md:w-1/3" alt="" />
          <div className="w-1/4" />
          <SignIn />
        </div>
      </div>
    )
  }
}

export default signin

import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Login from '../components/Login/Login'
import { Loader } from '@mantine/core'
import firebase from 'firebase'
import Router from 'next/router'

function signup() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        Router.push('/dashboard')
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
          <Login />
          <img src="SignUp.svg" className="mb-20 w-0 md:w-1/3" alt="" />
        </div>
      </div>
    )
  }
}

export default signup

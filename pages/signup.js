import React from 'react'
import Header from '../components/Header'
import Login from '../components/Login/Login'

function signup() {
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

export default signup

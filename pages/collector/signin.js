import React, { useState, useEffect } from 'react'
import SignIn from '../../components/Collector/SignIn/SignIn'
import { Loader } from '@mantine/core'
import Router from 'next/router'
import db from '../../firebase'
import firebase from 'firebase'

function signin() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="h-screen w-screen">
      <SignIn />
    </div>
  )
}

export default signin

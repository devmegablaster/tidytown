import React, { useState, useEffect } from 'react'
import SignUp from '../../components/Collector/SignUp/SignUp'
import Router from 'next/router'
import db from '../../firebase'
import firebase from 'firebase'
import { Loader } from '@mantine/core'

function signup() {
  return (
    <div className="h-screen w-screen">
      <SignUp />
    </div>
  )
}

export default signup

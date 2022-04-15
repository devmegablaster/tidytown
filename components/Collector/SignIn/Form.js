import Router from 'next/router'
import React, { useState } from 'react'
import {
  At,
  Id,
  Key,
  Location,
  MapPin,
  MapPins,
  Phone,
  User,
  AlertCircle,
} from 'tabler-icons-react'
import { LoadingOverlay, Button, Alert } from '@mantine/core'
import Field from '../../Login/Field'
import firebase from 'firebase'
import db from '../../../firebase'

function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [text, setText] = useState('')
  const [alert, setAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      setVisible(true)
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          db.collection('Collectors')
            .doc(user.user.uid)
            .get()
            .then((data) => {
              if (data.exists) {
                Router.push('/collector/dashboard')
              } else {
                firebase.auth().signOut()
                setText(
                  'This User is not a Collector on TidyTown, You might want to check out the User Portal!'
                )
                setVisible(false)
                setAlert(true)
              }
            })
        })
        .catch((err) => {
          setText(err.message)
          setVisible(false)
          setAlert(true)
        })
    } else {
      setText('Please Enter all the required Information in order to Proceed!')
      setVisible(false)
      setAlert(true)
    }
  }
  return (
    <div className=" h-screen w-7/12 rounded-l-3xl bg-white pt-2">
      <img
        src="https://gist.githubusercontent.com/MEGA-BLASTER2004/4c4dbac51a6847480da5b89c9829f370/raw/ce89721ecc75a307c08bfd01663fba7515dc2de8/tidytown.svg"
        alt=""
        onClick={() => {
          Router.push('/collector')
        }}
        className="mt-10 ml-10 h-12 cursor-pointer"
      />
      <h1 className="pl-20 pt-10 text-3xl font-medium">Welcome Back</h1>
      <h3 className="pl-20 pt-1 text-xl font-medium text-gray-500">
        Login to your Account to get started!
      </h3>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="relative mx-auto mt-10 flex w-9/12 flex-col space-y-5"
      >
        <LoadingOverlay
          visible={visible}
          loaderProps={{ size: 'lg', color: 'green' }}
          overlayOpacity={0.7}
          overlayColor=""
        />
        <Field
          label={'Email Address'}
          icon={<At className="text-green-500" />}
          value={email}
          onChange={setEmail}
        />
        <Field
          label={'Password'}
          password
          icon={<Key className="text-green-500" />}
          value={password}
          onChange={setPassword}
        />
        <div className="flex justify-center pt-4">
          <Button
            type="submit"
            size="xl"
            loading={visible}
            className="w-full rounded-xl bg-green-500 py-4 px-4 font-bold text-white duration-150 hover:scale-105 hover:bg-green-600 hover:shadow-xl active:scale-95 active:shadow-md"
          >
            Sign In
          </Button>
        </div>
      </form>
      <p className="mt-4 text-center text-gray-500">
        Don't have an account?{' '}
        <span className="cursor-pointer text-green-500">Sign Up</span>
      </p>
      <Alert
        icon={<AlertCircle size={16} />}
        title="Error"
        className={`${
          alert ? 'flex' : 'hidden'
        } absolute right-0 bottom-0 z-50 m-2 shadow-xl md:right-5 md:bottom-5 md:m-0`}
        color="red"
        variant="filled"
        onClose={() => setAlert(false)}
        withCloseButton
      >
        {text}
      </Alert>
    </div>
  )
}

export default Form

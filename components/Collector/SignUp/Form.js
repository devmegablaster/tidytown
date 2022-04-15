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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [aadhar, setAadhar] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [text, setText] = useState('')
  const [alert, setAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && name && aadhar && city && state && password) {
      setVisible(true)
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          user.user.updateProfile({
            displayName: name,
            photoURL: `https://avatars.dicebear.com/api/adventurer-neutral/${email}.svg`,
          })
          user.user.sendEmailVerification().then(() => {
            db.collection('Collectors')
              .doc(user.user.uid)
              .set({
                uid: user.user.uid,
                email,
                name,
                phone,
                aadhar,
                city,
                state,
                verified: false,
              })
              .then(() => {
                Router.push('/collector/dashboard')
              })
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
    <div className=" h-screen w-full bg-white pt-2 md:w-7/12 md:rounded-l-3xl">
      <img
        src="https://gist.githubusercontent.com/MEGA-BLASTER2004/4c4dbac51a6847480da5b89c9829f370/raw/ce89721ecc75a307c08bfd01663fba7515dc2de8/tidytown.svg"
        alt=""
        onClick={() => {
          Router.push('/collector')
        }}
        className="mt-10 ml-10 h-12 cursor-pointer"
      />
      <h1 className="pl-20 pt-10 text-3xl font-medium">Create Account</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="relative mx-auto mt-10 flex w-9/12 flex-col space-y-4"
      >
        <LoadingOverlay
          visible={visible}
          loaderProps={{ size: 'lg', color: 'green' }}
          overlayOpacity={0.7}
          overlayColor=""
        />
        <Field
          label={'Full Name'}
          icon={<User className="text-green-500" />}
          value={name}
          onChange={setName}
        />
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Field
            label={'Email Address'}
            icon={<At className="text-green-500" />}
            value={email}
            onChange={setEmail}
          />
          <Field
            label={'Phone Number'}
            icon={<Phone className="text-green-500" />}
            value={phone}
            onChange={setPhone}
          />
        </div>
        <Field
          label={'Aadhar Number'}
          icon={<Id className="text-green-500" />}
          value={aadhar}
          onChange={setAadhar}
        />
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Field
            label={'City'}
            icon={<MapPin className="text-green-500" />}
            value={city}
            onChange={setCity}
          />
          <Field
            label={'State'}
            icon={<MapPins className="text-green-500" />}
            value={state}
            onChange={setState}
          />
        </div>
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
            Sign Up
          </Button>
        </div>
      </form>
      <p className="mt-4 pb-10 text-center text-gray-500 md:pb-0">
        Already have an account?{' '}
        <span className="cursor-pointer text-green-500">Log In</span>
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

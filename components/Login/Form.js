import React, { useState } from 'react'
import Field from './Field'
import {
  At,
  Building,
  Home,
  Key,
  Phone,
  User,
  Users,
  AlertCircle,
} from 'tabler-icons-react'
import BlockSelect from './BlockSelect'
import SocietySelect from './SocietySelect'
import { Button, LoadingOverlay, Alert } from '@mantine/core'
import firebase from 'firebase'
import db from '../../firebase'
import Router from 'next/router'

function Form() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [society, setSociety] = useState('')
  const [house, setHouse] = useState('')
  const [block, setBlock] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [alert, setAlert] = useState(false)
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (
      firstName &&
      lastName &&
      email &&
      phone &&
      society &&
      house &&
      block &&
      password
    ) {
      setVisible(true)
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.trim(), password.trim())
        .then((user) => {
          user.user.updateProfile({
            displayName: firstName,
            photoURL: `https://avatars.dicebear.com/api/adventurer-neutral/${email}.svg`,
          })
          db.collection('Users')
            .doc(user.user.uid)
            .set({
              uid: user.user.uid,
              name: firstName + ' ' + lastName,
              email: email,
              phone: phone,
              society: society,
              houseNo: house,
              block: block,
              points: 20,
              multiplier: 1.25,
              changes: [{ type: 'bonus', points: 20, timestamp: Date() }],
            })
            .then(() => {
              console.log('HERE')
              user.user.sendEmailVerification().then(() => {
                Router.push('/dashboard')
              })
            })
        })
        .catch((err) => {
          setText(err.message)
          setAlert(true)
          setVisible(false)
        })
    } else {
      setText(
        'Please Enter all the Required Fields in order to proceed with your Account Creation!'
      )
      setAlert(true)
    }
  }
  return (
    <div className="flex w-full flex-col pr-0 md:pr-20">
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
        className=""
      >
        <div className="relative rounded-lg p-4">
          <LoadingOverlay
            visible={visible}
            loaderProps={{ size: 'lg', color: 'green' }}
            overlayOpacity={0.7}
            overlayColor=""
          />
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              <Field
                label={'First Name'}
                icon={<User className="text-green-500" />}
                value={firstName}
                onChange={setFirstName}
              />
              <Field
                label={'Last Name'}
                icon={<Users className="text-green-500" />}
                value={lastName}
                onChange={setLastName}
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-8">
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
            <SocietySelect value={society} onChange={setSociety} />
            <div className="flex flex-col sm:flex-row sm:space-x-8">
              <Field
                label={'House Number'}
                icon={<Home className="text-green-500" />}
                value={house}
                onChange={setHouse}
              />
              <BlockSelect value={block} onChange={setBlock} />
            </div>
            <Field
              label={'Password'}
              password
              icon={<Key className="text-green-500" />}
              value={password}
              onChange={setPassword}
            />
          </div>
        </div>
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
        <div className="flex w-full justify-center">
          <Button
            type="submit"
            variant="gradient"
            loading={visible}
            className="mt-5 mb-5 w-fit self-center bg-gradient-to-r from-teal-500 to-lime-500 duration-150 hover:scale-105 md:mb-0"
            size="lg"
          >
            Sign Up!
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form

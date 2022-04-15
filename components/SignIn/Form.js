import React, { useState } from 'react'
import Field from '../Login/Field'
import { Alert, LoadingOverlay, Button } from '@mantine/core'
import { Users, User, AlertCircle, At, Key } from 'tabler-icons-react'
import firebase from 'firebase'
import db from '../../firebase'

function Form() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
          db.collection('Users')
            .doc(user.user.uid)
            .get()
            .then((data) => {
              if (data.exists) {
                console.log(user)
              } else {
                firebase.auth().signOut()
                setText(
                  'This User is not a TidyTown Customer, You may want to check the Collector Portal!'
                )
                setVisible(false)
                setAlert(true)
              }
            })
        })
        .catch((err) => {
          setText(err.message)
          setAlert(true)
          setVisible(false)
        })
    } else {
      setText('Please Enter all the required Details!')
      setAlert(true)
      setVisible(false)
    }
  }
  return (
    <div className="flex w-full flex-col pr-0 md:pr-20">
      <form
        onSubmit={(e) => {
          handleSubmit(e)
        }}
        className="md:w-8/12"
      >
        <div className="relative w-full p-4">
          <LoadingOverlay
            visible={visible}
            loaderProps={{ size: 'lg', color: 'green' }}
            overlayOpacity={0.7}
            overlayColor=""
          />
          <div className="flex w-full flex-col space-y-4">
            <Field
              label={'Email Address'}
              icon={<At className="text-green-500" />}
              value={email}
              onChange={setEmail}
            />
            <Field
              label={'Password'}
              icon={<Key className="text-green-500" />}
              value={password}
              onChange={setPassword}
              password
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
            Sign In!
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form

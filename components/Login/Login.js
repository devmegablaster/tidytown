import React from 'react'
import Form from './Form'

function Login() {
  return (
    <div className="mt-20 flex w-2/3 flex-col items-start px-10">
      <h1 className="self-start text-2xl font-medium">Create Account</h1>
      <h3 className="mt-1 mb-10 self-start text-gray-600">
        To start collecting Geex Points!
      </h3>
      <Form />
    </div>
  )
}

export default Login

import React from 'react'
import Form from './Form'

function SignIn() {
  return (
    <div className="mt-40 flex w-full flex-col items-start px-4 md:w-full md:px-10">
      <h1 className="self-start text-2xl font-medium">Welcome Back!</h1>
      <h3 className="mt-1 mb-10 self-start text-gray-600">
        Login to your Account to get Started
      </h3>
      <Form />
    </div>
  )
}

export default SignIn

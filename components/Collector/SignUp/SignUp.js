import React from 'react'
import Form from './Form'

function SignUp() {
  return (
    <div className="flex h-screen w-screen bg-[#C2D75F]">
      <div className="w-0 md:w-5/12">
        <img
          src="https://gist.githubusercontent.com/MEGA-BLASTER2004/bceffa7b2a2b6f9bf32cdb27263aaeda/raw/275579008dacb5814b3fe4de6309ec2d24e186e0/Thinker.svg"
          alt=""
          className="bottom-0 mx-auto h-screen pt-20"
        />
      </div>
      <Form />
    </div>
  )
}

export default SignUp

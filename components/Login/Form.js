import React from 'react'
import Field from './Field'
import { At, Building, Home, Key, Phone, User, Users } from 'tabler-icons-react'
import BlockSelect from './BlockSelect'
import SocietySelect from './SocietySelect'
import { Button } from '@mantine/core'

function Form() {
  return (
    <div className="flex w-full flex-col pr-20">
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-8">
          <Field
            label={'First Name'}
            icon={<User className="text-green-500" />}
          />
          <Field
            label={'Last Name'}
            icon={<Users className="text-green-500" />}
          />
        </div>
        <div className="flex space-x-8">
          <Field
            label={'Email Address'}
            icon={<At className="text-green-500" />}
          />
          <Field
            label={'Phone Number'}
            icon={<Phone className="text-green-500" />}
          />
        </div>
        <SocietySelect />
        <div className="flex space-x-8">
          <Field
            label={'House Number'}
            icon={<Home className="text-green-500" />}
          />
          <BlockSelect />
        </div>
        <Field
          label={'Password'}
          password
          icon={<Key className="text-green-500" />}
        />
      </div>
      <Button
        variant="gradient"
        className="mt-5 w-fit self-center bg-gradient-to-r from-teal-500 to-lime-500 duration-150 hover:scale-105"
        size="lg"
      >
        Sign Up!
      </Button>
    </div>
  )
}

export default Form

import React from 'react'
import { Input } from '@mantine/core'

function Field({ label, icon, password }) {
  return (
    <div className="w-full">
      <h3 className="font-medium text-gray-500">{label}</h3>
      <Input icon={icon} type={password ? 'password' : 'text'} size="md" />
    </div>
  )
}

export default Field

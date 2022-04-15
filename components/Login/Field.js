import React from 'react'
import { Input } from '@mantine/core'

function Field({ label, icon, password, value, onChange }) {
  return (
    <div className="w-full">
      <h3 className="w-full font-medium text-gray-500">{label}</h3>
      <Input
        icon={icon}
        type={password ? 'password' : 'text'}
        size="md"
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      />
    </div>
  )
}

export default Field

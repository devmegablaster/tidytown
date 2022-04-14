import React from 'react'
import { Select } from '@mantine/core'
import { BuildingCommunity } from 'tabler-icons-react'

function SocietySelect() {
  return (
    <div className="w-full">
      <h3 className="font-medium text-gray-500">Society</h3>
      <Select
        placeholder="Pick one"
        size="md"
        searchable
        icon={<BuildingCommunity className="text-green-500" />}
        data={[
          { value: '1', label: 'Gokuldham Society' },
          { value: '2', label: 'Aakash Society' },
          { value: '3', label: 'Vishwanathan Society' },
          { value: '4', label: 'R Blockers Society' },
        ]}
      />
    </div>
  )
}

export default SocietySelect

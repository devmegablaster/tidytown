import React from 'react'
import { Select } from '@mantine/core'
import { Building } from 'tabler-icons-react'

function BlockSelect() {
  return (
    <div className="w-full">
      <h3 className="font-medium text-gray-500">Block</h3>
      <Select
        placeholder="Pick one"
        size="md"
        searchable
        icon={<Building className="text-green-500" />}
        data={[
          { value: 'A', label: 'A Block' },
          { value: 'B', label: 'B Block' },
          { value: 'C', label: 'C Block' },
          { value: 'D', label: 'D Block' },
        ]}
      />
    </div>
  )
}

export default BlockSelect

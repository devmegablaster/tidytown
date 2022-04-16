import React from 'react'

function PointsHistory({ changes }) {
  var counter = 1
  return (
    <div className="flex h-full w-full flex-col items-start space-y-6 rounded-xl bg-[#B2DA8E] p-16">
      <h1 className="text-3xl">Recent Points</h1>
      <div class="flex w-full flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="border-b border-black">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      Points
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-4 text-left text-sm font-medium text-gray-900"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {changes.map((data) => {
                    return (
                      <tr class="border-b border-black">
                        <td class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                          {counter++}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          {data.type == 'bonus'
                            ? 'Limited Signup Bonus'
                            : data.type == 'collect'
                            ? 'Waste Collection'
                            : 'Redeem'}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          <p className="w-fit rounded-xl bg-white px-4 py-2">
                            {data.points}
                          </p>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                          {new Date(data.timestamp).toDateString()}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PointsHistory

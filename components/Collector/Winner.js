import React from 'react'

function Winner() {
  return (
    <div
      className="relative hidden h-screen w-screen bg-gray-50 md:flex"
      style={{
        backgroundImage: `url("Group.svg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="pt-32" />
      <div className="mx-auto w-1/2 rounded-md px-4 py-10 text-center">
        <h1 className="font-serif text-7xl font-bold">
          Do Not Litter,
          <br />
          Make Life Better
        </h1>
      </div>
      <img
        src="Truck.svg"
        className="md:h-86 absolute bottom-0 hidden pr-10 md:-bottom-20 md:left-0 md:flex md:pr-0"
        alt=""
      />
    </div>
  )
}

export default Winner

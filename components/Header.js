import Router from 'next/router'
import React from 'react'

const links = [
  { text: 'About', route: '/about' },
  { text: 'Features', route: '/features' },
  { text: 'Join Us', route: '/join' },
  { text: 'Connect', route: '/connect' },
]

const Links = ({ route, text }) => (
  <div>
    <button
      className="text-gray-500 duration-150 hover:text-gray-700"
      onClick={() => {
        Router.push(route)
      }}
    >
      {text}
    </button>
  </div>
)

const BtnSignIn = () => (
  <div>
    <button
      className=" border-b border-transparent px-4 py-2 duration-150 hover:scale-105 hover:border-black active:scale-95"
      onClick={() => {
        Router.push('/signin')
      }}
    >
      Sign In
    </button>
  </div>
)

const BtnSignUp = () => (
  <div>
    <button
      className="rounded-full border border-green-500 px-4 py-2 text-green-500 duration-150 hover:scale-105 hover:bg-green-500 hover:text-white hover:shadow-lg active:scale-95"
      onClick={() => {
        Router.push('/signup')
      }}
    >
      Sign Up
    </button>
  </div>
)

function Header() {
  return (
    <div className="sticky top-0 left-0 right-0 flex items-center justify-between px-20 py-8">
      <img src="tidytown.svg" alt="" className="h-10" />
      <div className="flex space-x-4">
        {links.map((btn) => {
          return <Links text={btn.text} route={btn.route} />
        })}
      </div>
      <div className="flex space-x-3">
        <BtnSignIn />
        <BtnSignUp />
      </div>
    </div>
  )
}

export default Header

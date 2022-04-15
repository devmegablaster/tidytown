import React from 'react'
import Features from '../../components/Collector/Features'
import Landing from '../../components/Collector/Landing'
import Winner from '../../components/Collector/Winner'
import Header from '../../components/Header'

function index() {
  return (
    <div>
      <Header collector />
      <Landing />
      <Features />
      <Winner />
    </div>
  )
}

export default index

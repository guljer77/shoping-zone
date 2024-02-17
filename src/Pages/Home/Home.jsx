import React from 'react'
import Banner from './Banner/Banner'
import Popular from './PopularProduct/Popular'
import CommonBanner from '../../Components/CommonBanner'
import FlashCell from './Flash-sell/FlashCell'

function Home() {
  return (
    <>
      <Banner />
      <Popular />
      <CommonBanner />
      <FlashCell />
    </>
  )
}

export default Home
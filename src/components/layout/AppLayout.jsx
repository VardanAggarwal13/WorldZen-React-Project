import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from '../ui/Headers'
import Footers from '../ui/Footers'

const AppLayout = () => {
  return (
    <>
      <Headers/>
      <Outlet/>
      <Footers/>
    </>
  )
}

export default AppLayout
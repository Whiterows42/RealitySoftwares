import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Componant/Header/Header'
import Footer from './Componant/Footer/Footer'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout

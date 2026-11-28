import React, { useEffect } from 'react'
import Navbar from '../../pages/home/header/nav/Navbar'
// import Demo from '../../pages/home/header/demo/Demo'
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      {/* <Demo /> */}
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />

    </>
  )
}

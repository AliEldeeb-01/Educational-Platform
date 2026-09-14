import React from 'react'
import Navbar from '../../pages/home/header/nav/Navbar'
import Home from '../../pages/home/Home'
import Demo from '../../pages/home/header/demo/demo'
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

export default function Layout() {
  return (
    <>
      <Demo />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />

    </>
  )
}

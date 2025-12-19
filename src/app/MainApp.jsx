import React from 'react'
import Footer from '../components/home/footer/Footer'
import Navbar from '../components/home/navbar/Navbar'
import AnnouncementBar from '../components/home/AnnouncementBar'


const MainApp = ({ children }) => {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default MainApp

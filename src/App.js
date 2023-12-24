import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidemenu from './Components/Sidemenu/Sidemenu'
import VideoSection from './Components/VideoSection/VideoSection'

const App = () => {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
       <Sidemenu/> 

       <VideoSection/> 

    </main>
    </>
  )
}

export default App

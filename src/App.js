import React,{Routes, Route} from 'react-router-dom';
import MainPage from './Pages/MainPage'
import VideoPreview from './Pages/VideoPreview'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/VideoPreview' element={<VideoPreview/>}/>
    </Routes>
  )
}

export default App

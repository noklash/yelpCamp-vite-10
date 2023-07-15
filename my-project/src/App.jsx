import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Explore from './Explore'
import SignUp from './SignUp'
import SignIn from './SignIn'
import AddCamp from './AddCamp'
import AddComment from './AddComment';
import SearchPage from './SearchPage'
import IndvidualCamp from './IndividualCamp'

import Data from "./Data.json"


function App(props) {
// for darkmode
  const [mode, setMode] = React.useState(false)

  const currentSize = window.innerWidth
  const  [screenWidth, setScreenWidth] = React.useState(currentSize)
window.addEventListener("resize", function(){
  setScreenWidth(window.innerWidth)
})
 const [whichCamp, setWhichCamp] = React.useState(0)

 function handleWhichCamp(id) {
  setWhichCamp(id)
 }
  return (
    <div className='mode ? "dark" : " "'>
      
        <Router>
          <Routes>
            <Route path='/' element={<Explore  screen={screenWidth}/>} mode={mode} />
            <Route path='SearchPage' element={<SearchPage  screen={screenWidth} mode={mode}  Data={Data}/>} change={handleWhichCamp}/>

              <Route path=':IndividualCampId' element={<IndvidualCamp screen={screenWidth} mode={mode}  whichCamp={whichCamp} Data={Data}/>} >
                  <Route  path='AddComment' element={<AddComment screen={screenWidth}/>}/>
                </Route>
                {/* <Route path='AddCamp' element={<AddCamp screen={screenWidth}/>} /> */}
            
            <Route path='AddCamp' element={<AddCamp screen={screenWidth} mode={mode} />} />
            <Route path='SignUP' element={<SignUp screen={screenWidth} mode={mode} />}/>
            <Route path='SignIn' element={<SignIn screen={screenWidth} mode={mode} />}/>
          </Routes>
        </Router>
     </div>
  )
}

export default App

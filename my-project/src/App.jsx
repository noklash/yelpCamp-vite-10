import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Explore from './Explore'
import SignUp from './SignUp'
import AddCamp from './AddCamp'
import AddComment from './AddComment';
import SearchPage from './SearchPage'
import IndvidualCamp from './IndividualCamp'


function App(props) {
// for darkmode
  const [mode, setMode] = React.useState(false)

  const currentSize = window.innerWidth
  const  [screenWidth, setScreenWidth] = React.useState(currentSize)
window.addEventListener("resize", function(){
  setScreenWidth(window.innerWidth)
})

  return (
    <div className=''>
      {/* <Explore screen={screenWidth}/> */}
      {/* <SignUp screen={screenWidth}/> */}
      {/* <AddCamp screen={screenWidth}/> */}
      {/* <AddComment screen={screenWidth}/> */}
      {/* <SearchPage screen={screenWidth}/> */}
      {/* <IndvidualCamp 
        screen={screenWidth}
        mode={mode}
        /> */}
        <Router>
          <Routes>
            <Route path='/' element={<Explore  screen={screenWidth}/>}>
                <Route path='SearchPage' element={<SearchPage  screen={screenWidth}/>}>

                </Route>

            </Route>
          </Routes>
        </Router>
     </div>
  )
}

export default App

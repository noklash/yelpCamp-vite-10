import React from 'react'
import './App.css'
import Explore from './Explore'
import SignUp from './SignUp'
import AddCamp from './AddCamp'
import AddComment from './AddComment';
import SearchPage from './SearchPage'


function App(props) {
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
      <SearchPage screen={screenWidth}/>
    </div>
  )
}

export default App

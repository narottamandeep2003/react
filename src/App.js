import './App.css';
import { gsap, Power3 } from "gsap";
import React, { useState } from 'react';
import Boll from './components/Boll';
import NavBar from './components/NavBar';
import Text from './components/Text';
function App() {

document.body.addEventListener('mousemove',(e)=>{
let mx=e.clientX
let my=e.clientY


gsap.to('.cursor', 0.3, {
  x: e.clientX,
  y: e.clientY
})
gsap.to('.cursor-follower', 0.7, {
  x: e.clientX,
  y: e.clientY
})
})

  const [mode, chaneMode] = useState('light')
  const togglemode = () => {
    if (mode === 'dark') {
      chaneMode('light')
      document.body.style.backgroundColor = 'white'
    }
    else {
      chaneMode('dark')
      document.body.style.backgroundColor = 'black'
    }
  }
  return (
    <>
      <NavBar currMode={mode} toggle={togglemode} />
        <div className="cursor">
           
        </div>     
        <div className="cursor-follower"></div>
      <Boll></Boll>
      {/* <Text></Text> */}
    </>
  );
}

export default App;

import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './Project/Home'
import ContactUs from './Project/ContactUs'
import AboutUs from './Project/AboutUs'
import ButtonAppBar from './Project/AppBarDemo'
import ClickCounter from './Hoc/ClickCounter'
import HoverCounter from './Hoc/HoverCounter'
import EnComponent from './Hoc/Hoc'
import HooksEx from './Components/HooksEx/HooksEx'
import LoginEx from './FormsEx/LoginEx'
//import ButtonAppBar from './Project/AppBarDemo'
//import SwitchLabels from './Project/SwitchBarDemo'

function App() {
  return (
    <div>
      <ButtonAppBar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<ContactUs/>}/>
        <Route path="/Aboutus" element={<AboutUs/>}/>
        </Routes>
        </BrowserRouter>
        <ClickCounter/>
        <HoverCounter/>
        <EnComponent/>
  <HooksEx/>
        <LoginEx/>
       </div>
    
  )
}

export default App
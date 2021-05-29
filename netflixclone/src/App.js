

import React from 'react'
import Navbar from './Componenets/Navbar/Navbar'
import {action,originals} from './urls'
import "./App.css"
import Banner from './Componenets/Banner/Banner'
import RowPost from './Componenets/RowPost/RowPost'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
    </div>
  )
}

export default App


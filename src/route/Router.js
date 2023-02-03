import React from 'react'
import { Route,Routes } from 'react-router-dom'
import App from '../App'
import List from '../pages/List'

function Router() {
  return (
    <Routes>
        <Route path='/'  element={<App/>}/>
        <Route path='/list/:event' element={<List/>}/>
    </Routes>
  )
}

export default Router

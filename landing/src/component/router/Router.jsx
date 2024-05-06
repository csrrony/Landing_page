import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Landing_page from '../page/Landing_page'
const Router = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Landing_page/>}/>
        </Routes>
    </div>
  )
}

export default Router
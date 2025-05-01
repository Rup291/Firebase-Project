import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouteService from './routes/RouteService'

 const App:React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <RouteService/>
      </BrowserRouter>
    </div>
  )
}

export default App
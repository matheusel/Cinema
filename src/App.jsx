import './App.css'
import Topo from './components/topo'
import Base from './components/base'
import Card1 from './components/card'


import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
        < Topo />
        <Outlet />
        < Base />
    </div>
  )
}

export default App

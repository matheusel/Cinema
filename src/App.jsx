import './App.css'
import Topo from './components/topo'
import Base from './components/base'
import Card1 from './components/card'

function App() {

  return (
    <div className="App">
      <header>
        < Topo />
      </header>

      <main>
        <div className='container'>
          <div className='card'>
            < Card1 />
          </div>
        </div>
      </main>

      <footer>
        < Base />
      </footer>

    </div>
  )
}

export default App

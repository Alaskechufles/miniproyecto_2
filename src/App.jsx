
import './App.css'
import Face from './face/Face'
import Nav from './nav/Nav'
import Search from './search/Search'

function App() {


  return (
    <>
      <div className="main">
        <div className="search">
          <Search/>
        </div>
        <Nav/>
        <Face/>
        
      </div>
    </>
  )
}

export default App

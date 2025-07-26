import './App.css'
import Sidebar from './components/Sidebar'

import Icons from './components/Icons'
import About from './components/About'
import Body from "./components/Body"

//Desktop like resume with clickable buttons that lead to social media using i frames

function App() {
  return (
    <div className='main'>
        <Sidebar />
        <Body> </Body>
    </div>
  )
}

export default App

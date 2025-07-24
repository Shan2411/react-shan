import './App.css'
import Sidebar from './components/Sidebar'
import Window1 from './components/Window1'
import Icons from './components/Icons'
import About from './components/About'
//import Body from "./components/Body"

//Desktop like resume with clickable buttons that lead to social media using i frames

function App() {
  return (
    <div className='main'>
        <Window1 />
        <Sidebar />
        <Icons />
        <About />
    </div>
  )
}

export default App

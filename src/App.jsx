import './App.css'
import Body from "./components/Body"
import Top from "./components/top"
import "./components/Icon2.css"
import Sound from "/z.mp3"

//Desktop like resume with clickable buttons that lead to social media using i frames

function App() {
  return (
    <div className='main'>
        <img src="/sound.png" className='image' id='sound' alt="" onClick={Sound}/>
        
        <Body> </Body>
    </div>
  )
}

export default App

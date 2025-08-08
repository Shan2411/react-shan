import { useState, useRef } from 'react';
import './Icon2.css'
import Window1 from './Window1'
import Window2 from './Window2'
import Window4 from './Window4'

function Icon2 () {

  //window 1
    const descClick = useRef(null)

    const [isShown, setisShown] = useState(false)

    const descHandler = (event) => {
      setisShown(prev => !prev);
    }
    
  //window 2
    const descClick2 = useRef(null)

    const [isShown2, setisShown2] = useState(false)

    const descHandler2 = (event) => {
      setisShown2(prev => !prev);
    }
  
    //window 4
    const descClick4 = useRef(null)

    const [isShown4, setisShown4] = useState(false)

    const descHandler4 = (event) => {
      setisShown4(prev => !prev);
    }


    return (
      <div className="container2">
        <div className="iconContainer">


          <div className="desc" ref={descClick} onClick={descHandler}>
            <img className="image2" id="resume1" src="/winfo.png" alt="" />
            <span><br/>about</span>
          </div>

          <Window1 shown={isShown} close={descHandler} />

          <div className="desc" ref={descClick2} onClick={descHandler2}>
            <img className="image2" id="resume1" src="/wfoldericon.png" alt="" />
            <span><br/>works</span>
          </div>

          <Window2 shown2={isShown2} close2={descHandler2} />

          <div className="desc">
            <img className="image2" id="resume1" src="/wresume.png" alt="" />
            <span><br/>resume</span>
          </div>

          <div className="desc" ref={descClick4} onClick={descHandler4}>
            <img className="image2" id="resume1" src="/wcontact.png" alt="" />
            <span><br/>contacts</span>
          </div>

          <Window4 shown4={isShown4} close4={descHandler4} />

        </div>
      </div>
    );

}

export default Icon2;
import { useState, useRef } from 'react';
import './Icon2.css'
import Window1 from './Window1'

function Icon2 () {

    const descClick = useRef(null)

    const [isShown, setisShown] = useState(false)

    const descHandler = (event) => {
      console.log("Handler sees isShown:", isShown);
      setisShown(prev => !prev);
    }
    


    return (
      <div className="container2">
        <div className="iconContainer">


          <div className="desc" ref={descClick} onMouseDown={descHandler}>
            <img className="image2" id="resume1" src="/info.png" alt="" />
            <span><br/>about</span>
          </div>

          <Window1 shown={isShown}/>

          <div className="desc">
            <img className="image2" id="resume1" src="/foldericon.png" alt="" />
            <span><br/>works</span>
          </div>

          <div className="desc">
            <img className="image2" id="resume1" src="/resume.png" alt="" />
            <span><br/>resume</span>
          </div>

          <div className="desc">
            <img className="image2" id="resume1" src="/contact.png" alt="" />
            <span><br/>contacts</span>
          </div>


        </div>
      </div>
    );

}

export default Icon2;
import { useState, useEffect, useRef} from "react";
import "./WindowMain.css"
import "./Window1.css"
import Window1content from "./WindowContents/Window1content.jsx"

function Window1 ({shown, close}) {

    const panel = useRef(null)
    const [coords, setcoords] = useState({x: -500, y: -180});
    const [newcoords, setnewcoords] = useState({ newX: 0, newY: 0 });

    const mouseU = (event) => {
      document.removeEventListener("mousemove", mouseM);
    };
    const mouseM = (event) => {
      setnewcoords({ newX: event.clientX, newY: event.clientY });

    };
    const mouseD = (event) => {
        const rect = panel.current.getBoundingClientRect();

        setnewcoords({ newX: event.clientX, newY: event.clientY });
        setcoords({ x: event.clientX - rect.left, y: event.clientY - rect.top });

        document.addEventListener("mousemove", mouseM);
        document.addEventListener("mouseup", mouseU);
    };

    useEffect(() => {

      panel.current.addEventListener("mousedown", mouseD);

      return () => {
        document.removeEventListener("mousemove", mouseM);
        document.removeEventListener("mouseup", mouseU);

        if (panel.current) {
          panel.current.removeEventListener("mousedown", mouseD);
        }
      };
    }, []);

    // determine current size of the website


    return(
      <>
        <div className="window1Cont" style={{top: newcoords.newY - coords.y, left: windowSize() ? 0 : newcoords.newX - coords.x, display: shown ? 'block' : 'none'}}>
            <div ref={panel} className="header">
              <span className="aboutDesign"> 
                <img src="/winfo.png" alt="" className="winfoHeader" />
                about.txt - Notepad
              </span>
              <span className="xButton" onMouseDown={close}>[ x ]</span>
            </div>
            <Window1content />
        </div>
      </>
    )

}

export function windowSize() {
  
  const windowWidth = window.innerWidth;
  return windowWidth < 750;

}
export default Window1;
import { useState, useEffect, useRef} from "react";
import "./WindowMain.css"
import "./Window2.css"
import "./Window1.css"
import Window2content from "./WindowContents/Window2content.jsx";
import {windowSize} from "./Window1.jsx"

function Window2 ({shown2, close2}) {

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
        if(panel.current) {
          panel.current.removeEventListener("mousedown", mouseD)
        }
      };
    }, []);

    return(

        <div className="windowCont" id="window2size" style={{top: newcoords.newY - coords.y, left: windowSize() ? 0 : newcoords.newX - coords.x, display: shown2 ? 'block' : 'none'}}>
            <div ref={panel} className="headerWin">
              <img src="/wfoldericon.png" className= "winfoHeader" alt="" />
              <span className="details2">works</span>
              <span className="xButtonWhite" onMouseDown={close2}>[ x ]</span>
            </div>
            <Window2content />
        </div>
        
    )

}


export default Window2;
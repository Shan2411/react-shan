import { useState, useEffect, useRef} from "react";
import "./WindowMain.css"
import { windowSize } from "./Window1";
import Window3content from "./WindowContents/Window3content.jsx";
import "./Body.css"
import "./Window4.css"
import "./Window1.css"

function Window4 ({shown4, close4}) {


    console.log("number 4",shown4 )

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
      const logs = (event) => {
        console.log(newcoords.newX);
      };

      panel.current.addEventListener("mousedown", mouseD);
      document.addEventListener("keydown", logs);

      return () => {
        document.removeEventListener("keydown", logs);
        document.removeEventListener("mousemove", mouseM);
        document.removeEventListener("mouseup", mouseU);
        //panel.current.removeEventListener("mousedown", mouseD)
      };
    }, []);

    return(

        <div ref={panel} className="windowCont" style={{top: newcoords.newY - coords.y, left: windowSize() ? 0 : newcoords.newX - coords.x, display: shown4 ? 'block' : 'none'}}>
            <div className="headerWin">
              <img src="/winbox.png" className="winfoHeader" alt="" />
              <span className="details2">Inbox</span>
              <span className="xButtonWhite" onMouseDown={close4}>[ x ]</span>
            </div>
            <Window3content />
        </div>
        
    )

}

export default Window4;
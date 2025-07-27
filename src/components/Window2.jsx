import { useState, useEffect, useRef} from "react";
import "./WindowMain.css"

function Window2 ({shown2, close2}) {


    console.log("number 2",shown2 )

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

        <div ref={panel} className="windowCont" style={{top: newcoords.newY - coords.y, left: newcoords.newX - coords.x, display: shown2 ? 'block' : 'none'}}>
            <div className="header">
              <span className="xButton" onMouseDown={close2}>[ x ]</span>
            </div>
        </div>
        
    )

}

export default Window2;
import { useState, useEffect, useRef} from "react";
import "./Window1.css"

function Window1 (props) {

    const panel = useRef(null)
    const [coords, setcoords] = useState({x: 0, y: 0});
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

        <div ref={panel} className="windowCont" style={{top: newcoords.newY - coords.y, left: newcoords.newX - coords.x, display: props.isShown ? 'block' : 'none'}}>
            <div className="header">

            </div>
        </div>
        
    )

}

export default Window1;
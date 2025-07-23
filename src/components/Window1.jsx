import { useState, useEffect} from "react";
import "./Window1.css"

function Window1 () {


    const [coords, setcoords] = useState({x: 0, y: 0});
    const [newcoords, setnewcoords] = useState ({newX: 0, newY: 0});

    useEffect(() => {

        const mouseU = (event) => {
            panel.removeEventListener('mousemove', mouseM);
        }
        const mouseM = (event) => {
            setnewcoords({newX: event.clientX, newY: event.clientY});
            
        }
        const mouseD = (event) => {
            setcoords({x: event.clientX, y: event.clientY});
            
            panel.addEventListener('mousemove', mouseM)
            panel.addEventListener('mouseup', mouseU)
        }
        const logs = (event) => {console.log(newcoords.newX)}

        const panel = document.querySelector(".windowCont")
        
        panel.addEventListener('mousedown', mouseD)
        document.addEventListener('keydown', logs)

      return () => {
        
      }
    });

    return(

        <div className="windowCont" style={{top: newcoords.newY - coords.y, left: newcoords.newX - coords.x}}>
            <div className="header">

            </div>
        </div>
        
    )

}

export default Window1;
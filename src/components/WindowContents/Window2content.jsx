import './Window2content.css'
import { useRef, useState } from 'react';

function Window2content () {

    const [visible, setvisible] = useState(false)

    function illustCaller(event) {
        setvisible(prev => !prev);
    }
    function undoFunction(event) {
        setvisible(false);
    }
    
    return(

        <div className="w2container">
             <div className="content2">
                <div className='undoContainer'>
                    <span className='arrowText' onClick={undoFunction}>&larr;</span>
                    <span className='arrowText'>&rarr;</span>
                </div>
                <div className='imgCont2'>
                    <div className='iconWithName'>
                        <img src="/wfolder2.png" className='img5'/>
                        <span className='folderName'> Development </span>
                    </div>
                    <div className='iconWithName'>
                        <img src="/wfolder2.png" className='img5'onClick={illustCaller}/>
                        <span className='folderName'> Illustrations </span>
                    </div>


                    <div className='illustContainer' style={{display: visible ? "block" : "none"}}>
                        <div className='drawnContainer'>
                            <img className="drawn" src="/newMococo.gif" alt="" />
                            <img className='drawn' src="/Du30.jpg" alt="" />
                            <img className='drawn' src="/new2.jpg" alt="" />
                            <img className='drawn' src="/Red sun.jpg" alt="" />
                            <img className='drawn' src="/gmurin.jpg" alt="" />
                            <img className='drawn' src="/sabe.jpg" alt="" />
                            <img className='drawn' src="/maybe.png" alt="" />
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )

}

export default Window2content;
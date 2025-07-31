import './Window1content.css'
import Icons from './Icons'
import Icons3 from './Icons3'

function Window1content() {

    return(
        <div className='w1scrollbar'>
            <div className="containerWindow1">
                
                <span id='cw1header1'>Hi! im Shan</span> <span id='cw1header2'>I Illustrate and Develop, capable of working with the following tools and languages:</span> <br /><br /><br />
                <p className='text' id='cw1text2'>Development: </p>
                <Icons /> <br /> <br />
                <p className='text' id='cw1text2'>Illustrations:</p>
                <Icons3 /> <br /> <br />
                <hr />
                <br />
                <span className='text' id='cw1header1'>Education:</span> <br /><br />
                <p className='text' id='cw1text3'> <br /> 2024 - current Bachelor in science of Computer Science</p>
            </div>
        </div>
    )

}

export default Window1content;
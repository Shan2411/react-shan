import './Window1content.css'
import Icons from './Icons'

function Window1content() {

    return(

        <div className="containerWindow1">

            <p className='text' id='cw1header1'>Hello Guys I am a student capable of doing... <br /><br /></p>
            <p className='text' id='cw1header2'>Programming: <br /><br /></p>
            <Icons />
            <p className='text' id='cw1header2'>Scripting: <br /><br /></p>
            <Icons />
            <p className='text' id='cw1header2'>Framework: <br /><br /></p>
            <Icons />
        </div>

    )

}

export default Window1content;
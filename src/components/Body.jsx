import "./Body.css"
import Icon2 from './Icon2'



function Body () {

    return (
        <>
            <div className="Bodey">
                <div className="box" id="hidden"> 
                    <span className="name">Shan David H. Enriquez <br /></span>
                    <span className="loc">  📍Based in the Philippines <br /></span>
                    <p className="details">18 y/o Computer Science Student studying at UCC</p>
                    <hr/>
                    <Icon2 />
                </div>
            </div>
        </>
    )

}

export default Body;
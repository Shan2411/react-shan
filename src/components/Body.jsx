import "./Body.css"
import Icons from './Icons'



function Body () {

    return (
        <>
            <div className="Bodey">
                <div className="box" id="b1"> Other Works:</div>
                <div className="box" id="b2"> Projects</div>
                <div className="box" id="b3"> test</div>
                <div className="box" id="b4"> test</div>
                <div className="box" id="hidden"> 
                    <span className="name">Shan David H. Enriquez <br /></span>
                    <span className="loc">  📍Based in the Philippines <br /></span>
                    18 years old Computer Science Student studying at UCC
                    </div>
                <div className="box" id="b5"> <Icons /></div>
            </div>
        </>
    )

}

export default Body;
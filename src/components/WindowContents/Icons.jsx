import "./Icons.css"


function Icons () {

    return(
        <>
            <div className="w1imgconainert">
                <div className="block">
                    <img className="image" id="resume" src="/react2.png" alt="" /> <span id="progName"> React </span>
                </div>
                <div className="block">
                    <img className="image" id="resume" src="/html.png" alt="" /> <span id="progName"> HTML </span>
                </div>
                <div className="block">
                    <img className="image" id="resume" src="/css.png" alt="" /> <span id="progName"> CSS </span>
                </div>
                <div className="block">
                    <img className="image" id="github" src="/java.png" alt="" /> <span id="progName"> Java </span>
                </div>

            </div>
            
          
        </>
    )

}

export default Icons;
import "./Body.css"
import Icon2 from './Icon2'



function Body () {


    /*
        <span className="name">Shan David H. Enriquez <br /></span>
        <span className="loc">  📍Based in the Philippines <br /></span>
        <p className="details">18 y/o Computer Science Student studying at UCC</p>
    */

    return (
        <>
            <div className="Bodey">
                <div className="box" id="border">
                <div className="box" id="hidden"> 
                    <div className="head"> 
                        <img className="folderHeader" src="/wfolder2.png" alt="" />
                        <p className="details">C:\Windows\System32\Shan's Computer</p>
                    </div>
                    <div className="head2"> 
                        <span className="loc">File</span>
                        <span className="loc">Edit</span>
                        <span className="loc">View</span>
                        <span className="loc">Go</span>
                     </div>
                    <Icon2 />
                </div>
                </div>
            </div>
        </>
    )

}

export default Body;
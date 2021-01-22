import '../stylesheets/artist.css'; // import the stylesheet of this component 
const Artists = (props) => {
    return(
        <div className="screenContentDiv">
            <div className="screenHeader">
                {/* this is the screen header as in all the components  */}
                <span className="ipod-icon">iPod</span>
                <span className="battery"><i class="fas fa-battery-three-quarters"></i></span>
            </div>
            <div id="artistDiv">
                {/* this is the artist div */}
                <img src="logo512.png"></img>
                <br></br>
                <div>React Mini-Project</div>
                <div>By</div>
                <div>A React-Developer</div>   <br></br>
                <div>(This is the Artist Component though)</div>                    
            </div>
        </div>
    )
}
export default Artists; // export the component 
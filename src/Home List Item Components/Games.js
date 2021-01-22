//  this is the games component

const Games=(props)=>{
    return(
        <div className="screenContentDiv">
            <div className="screenHeader"> 
            {/* screen header div */}
                <span className="ipod-icon">iPod</span>
                <span className="battery"><i class="fas fa-battery-three-quarters"></i></span>
            </div>
            <div style={styles.gamesBody}>
                {/* this just contains one gif */}
                <img style={styles.game} alt=" Game GIF " src="https://media2.giphy.com/media/uYe2emzPgDfj2/giphy.webp?cid=ecf05e47fa455dac230de80fff0206077175b008801bc689&rid=giphy.webp"></img>
            </div>
        </div>
    )
}
const styles={ 
    // stylings of Games Component 
    gamesBody:{
        width:'100%',
        height:'93%',
        borderRadius:'0px 0px 10px 10px',
    },
    game:{
        height:'100%',
        width:'100%',
        backgroundSize:'contain' 
    }
}
export default Games; // export the Games component
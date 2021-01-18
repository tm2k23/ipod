import React from 'react';
class Games extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="screenContentDiv">
                <div className="screenHeader">
                    <span className="ipod-icon">iPod</span>
                    <span className="battery"><i class="fas fa-battery-three-quarters"></i></span>
                </div>
                <div style={styles.gamesBody}>
                    <img style={styles.game} src="https://media2.giphy.com/media/uYe2emzPgDfj2/giphy.webp?cid=ecf05e47fa455dac230de80fff0206077175b008801bc689&rid=giphy.webp"></img>
                </div>
            </div>
        )
    }
}
const styles={
    gamesBody:{
        // display:'flex',
        // justifyContent:'center',
        // alignItems:'center',
        // fontSize:'200px',
        width:'100%',
        height:'93%',
        borderRadius:'0px 0px 10px 10px',
        // marginTop:'-5px',
        // backgroundColor:"#9c8be8",
        // color:'#ccf0cd'
    },
    game:{
        height:'100%',
        width:'100%',
        backgroundSize:'contain'
    }
}
export default Games;